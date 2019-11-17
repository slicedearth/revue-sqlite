<template>
  <div>
    <panel title="Reviews">
      <div class="row mx-auto">
        <div class="col-md-12 mb-2 mx-auto" style="max-width:90%">
          <SearchReviews />
          <router-link
            v-if="$store.state.isUserLoggedIn"
            to="/reviews/create"
            class="btn btn-warning mx-auto w-100 my-3"
          >Post Review</router-link>
        </div>
      </div>
      <div class="row mx-auto" style="max-width: 90%">
        <div class="col-12 col-md-6 col-lg-4" v-for="review in reviews" :key="review.id">
          <b-card :title="review.reviewTitle" class="mb-2 mx-auto">
            <img :src="review.albumArt" alt class="img-fluid p-2" />
            <b-card-text>{{ review.album }}</b-card-text>
            <b-card-text>{{ review.artist }}</b-card-text>
            <b-card-text>By&nbsp;{{ review.reviewAuthor }}</b-card-text>
            <router-link :to="'/reviews/' + review.id" class="btn btn-primary d-block">Full Review</router-link>
          </b-card>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
import SearchReviews from "@/components/SearchReviews";
import ReviewService from "@/services/ReviewService";
import Panel from "@/components/Panel";
export default {
  name: "Review",
  components: {
    Panel,
    SearchReviews
  },
  data() {
    return {
      reviews: ""
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.reviews = (await ReviewService.getReviews(value)).data;
      }
    }
  }
};
</script>

<style>
</style>
