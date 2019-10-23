<template>
  <div class="home bg-light">
    <h1>Welome to ReVue</h1>
    <div class="row m-1">
      <div class="col-md-10">
        <h2>News</h2>
        <div v-for="review in reviews" :key="review.id">
          <b-card style="max-width: 100%;" class="mb-2">
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </div>

      <div class="col-md-2 bg-dark p-2">
        <h2 class="text-white">Latest Reviews</h2>
        <div v-for="review in reviews.slice(0,3)" :key="review.id">
          <b-card
            :title="review.reviewTitle"
            :album="review.album"
            :artist="review.artist"
            :author="review.reviewAuthor"
            tag="reviews"
            style="max-width: 100%"
            class="mb-2"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <router-link :to="'/reviews/' +review.id" class="btn btn-primary">Full Review</router-link>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewService from "@/services/ReviewService";
export default {
  name: "Home",
  data() {
    return {
      reviews: null
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