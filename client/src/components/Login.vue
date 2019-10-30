<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-4 col-12">
        <b-card class="text-center shadow-lg bg-light mt-5">
          <h4 slot="header" class="text-primary m-0">Login</h4>
          <b-form-input type="email" placeholder="Enter Email" v-model="email" class="mb-3"></b-form-input>
          <b-form-input
            type="password"
            placeholder="Enter Password"
            v-model="password"
            class="mb-3"
          ></b-form-input>
          <b-card-text
            class="error mt-3"
            v-html="error"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam, mollitia impedit commodi non autem?</b-card-text>
          <b-button variant="primary" @click="login" class="w-100">Login</b-button>
        </b-card>
      </div>
    </div>
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
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({ name: "root" });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
<style>
.error {
  color: red;
}
</style>