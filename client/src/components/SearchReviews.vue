<template>
  <b-form-input v-model="search" placeholder="Search by Artist, Album, Genre or Author"></b-form-input>
</template>

<script>
export default {
  name: "SearchReviews",
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search(value) {
      const route = {
        name: "Review"
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