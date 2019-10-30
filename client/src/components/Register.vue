<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-4 col-12">
        <b-card class="text-center shadow-lg bg-light mt-5">
          <h4 class="text-primary m-0" slot="header">Register</h4>
          <b-form-input
            name="email"
            type="email"
            placeholder="Enter Email"
            v-model="email"
            class="mb-3"
          ></b-form-input>
          <b-form-input
            type="text"
            name="username"
            placeholder="Enter Username"
            v-model="username"
            class="mb-3"
          ></b-form-input>
          <b-form-input
            type="password"
            name="password"
            placeholder="Enter Password"
            v-model="password"
            class="mb-3"
          ></b-form-input>
          <!-- <b-form-input
              type="password"
              name="password"
              placeholder="Enter Password Again"
              v-model="password"
              class="mb-3"
          ></b-form-input>-->
          <b-card-text
            v-html="error"
            class="error mt-3"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b-card-text>
          <b-button variant="primary" @click="register" class="w-100">Register</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          username: this.username,
          password: this.password
        });
        console.log(this.$store);
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
</style>