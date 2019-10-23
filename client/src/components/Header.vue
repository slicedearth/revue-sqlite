<template>
  <div>
    <!-- Navbar -->
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand href="/">
        <!-- <img src="../assets/logo.svg" alt /> -->
        ReVue
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/news" class="mr-2">News</router-link>
          <router-link to="/reviews" class="mr-2">Reviews</router-link>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <router-link
              v-if="!$store.state.isUserLoggedIn"
              to="/login"
              class="btn btn-primary mr-2"
            >Login</router-link>
            <router-link
              v-if="!$store.state.isUserLoggedIn"
              to="/register"
              class="btn btn-secondary mr-2"
            >Register</router-link>
            <b-button v-if="$store.state.isUserLoggedIn" @click="logout" class="btn btn-secondary"></b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({ name: "root" });
    }
  }
};
</script>

<style>
</style>