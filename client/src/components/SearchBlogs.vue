<template>
  <b-form-input v-model="search" placeholder="Filter by Title, Author or Keywords"></b-form-input>
</template>

<script>
export default {
  name: "SearchBlogs",
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search() {
      const route = {
        name: "Blog",
      };
      if (this.search !== "") {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
    },
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
};
</script>

<style>
</style>