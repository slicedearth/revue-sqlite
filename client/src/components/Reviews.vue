<template>
  <div>
    <panel title="Reviews">
      <div class="row m-1">
        <div class="col-md-12 mb-2 mx-auto" style="max-width:90%">
          <SearchReviews />
        </div>
      </div>
      <router-link
        v-if="$store.state.isUserLoggedIn"
        to="/reviews/create"
        class="btn btn-warning mr-2 w-100 mb-3"
        >Post Review</router-link
      >
      <div class="row m-1">
        <div class="col-md-12">
          <div v-for="review in reviews" :key="review.id">
            <b-card
              :title="review.reviewTitle"
              style="max-width: 90%"
              class="mb-2 mx-auto"
            >
              <b-card-text>{{ review.album }}</b-card-text>
              <b-card-text>{{ review.artist }}</b-card-text>
              <b-card-text>By&nbsp;{{ review.reviewAuthor }}</b-card-text>
              <img :src="review.albumArt" alt class="img-fluid p-2" />
              <br />
              <router-link :to="'/reviews/' + review.id" class="btn btn-primary"
                >Full Review</router-link
              >
            </b-card>
          </div>
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
/* #moreRev,
#morePosts {
} */
</style>
