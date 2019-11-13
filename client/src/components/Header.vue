<template>
  <div class="bg-light">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <router-link to="/">
        <b-navbar-brand>ReVue</b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/blog" class="mr-2">Blog</router-link>
          <router-link to="/reviews" class="mr-2">Reviews</router-link>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <Login />
          <Register />
          <b-button
            v-if="$store.state.isUserLoggedIn"
            @click="logout"
            class="btn btn-secondary"
          >Logout</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Register from "@/components/Register";
import Login from "@/components/Login";
export default {
  name: "Header",
  components: {
    Register,
    Login
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      // this.$router.push({ name: "root" }).catch(err => {});
      this.$router.go("/");
    }
  }
};
</script>

<style>
</style>