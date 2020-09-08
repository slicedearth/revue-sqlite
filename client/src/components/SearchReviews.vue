<template>
  <b-form-input v-model="search" placeholder="Filter by Artist, Album, Genre or Reviewer"></b-form-input>
</template>

<script>
export default {
  name: "SearchReviews",
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search() {
      const route = {
        name: "Review",
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