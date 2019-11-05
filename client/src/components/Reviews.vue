<template>
  <div>
    <panel title="Reviews">
      <router-link
        v-if="$store.state.isUserLoggedIn"
        to="/reviews/create"
        class="btn btn-warning mr-2 w-100 mb-3"
      >Post Review</router-link>
      <div class="row m-1">
        <div class="col-md-12">
          <div v-for="review in reviews" :key="review.id">
            <b-card
              :title="review.reviewTitle"
              tag="reviews"
              style="max-width: 80%"
              class="mb-2 mx-auto"
            >
              <b-card-text>{{review.album}}</b-card-text>
              <b-card-text>{{review.artist}}</b-card-text>
              <b-card-text>By&nbsp;{{review.reviewAuthor}}</b-card-text>
              <img :src="review.albumArt" alt class="img-fluid p-2" />
              <br />
              <router-link :to="'/reviews/' +review.id" class="btn btn-primary">Full Review</router-link>
            </b-card>
          </div>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
import ReviewService from "@/services/ReviewService";
export default {
  name: "Home",
  components: {
    Panel
  },
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