<template>
  <div>
    <b-button
      v-if="!$store.state.isUserLoggedIn"
      @click="showModal"
      variant="info"
      class=" mr-2"
    >
      Login
    </b-button>
    <b-modal ref="lginModal" centered title="Login" hide-footer>
      <b-form-input
        name="email"
        type="email"
        placeholder="Enter Email"
        v-model="email"
        class="mb-3"
        @keydown.native.enter="login"
      ></b-form-input>
      <b-form-input
        type="password"
        name="password"
        placeholder="Enter Password"
        v-model="password"
        class="mb-3"
        @keydown.native.enter="login"
      ></b-form-input>
      <b-card-text v-html="error" class="error mt-3"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b-card-text
      >
      <b-button variant="info" @click="login" class="w-100">Login</b-button>
    </b-modal>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    showModal() {
      this.$refs["lginModal"].show();
    },
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$refs["lginModal"].hide();
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>
<style>
.error {
  color: red;
}
</style>
