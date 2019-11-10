<template>
  <b-form-input v-model="search" placeholder="Search by Title, Author or Keywords"></b-form-input>
</template>

<script>
export default {
  name: "SearchBlogs",
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search(value) {
      const route = {
        name: "Blog"
      };
      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }
      this.$router.push(route);
    },
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>

<style scoped>
</style>