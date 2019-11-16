<template>
  <div>
    <panel :title="review.reviewTitle" v-if="review">
      <div class="row">
        <div class="col-md-12">
          <img
            :src="review.albumArt"
            :alt="review.reviewTitle"
            class="img-fluid rounded shadow"
            style="max-width:80%"
          />
        </div>
        <div class="col-md-12 mt-3">
          <b>By:</b>
          {{ review.reviewAuthor }}
        </div>
        <div class="col-md-12 mt-3">
          <b>Album:</b>
          {{ review.album }}
          <b>Artist:</b>
          {{ review.artist }}
        </div>

        <br />

        <div class="col-md-12 m-auto">
          <p class="mt-2">{{ review.reviewText }}</p>
        </div>
      </div>
      <router-link
        v-if="$store.state.isUserLoggedIn"
        :to="'/reviews/' + review.id + '/edit'"
        class="mr-2 w-100 btn btn-success"
        >Edit</router-link
      >
      <b-button
        v-if="$store.state.isUserLoggedIn"
        @click="delRev"
        class="btn btn-secondary w-100 mr-2"
        >Delete</b-button
      >
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
import ReviewService from "@/services/ReviewService";
export default {
  name: "ViewReview",
  components: {
    Panel
  },
  data() {
    return {
      review: null
    };
  },
  methods: {
    async delRev() {
      try {
        // eslint-disable-next-line
        console.log("delete");
        this.review = await ReviewService.deleteReview(
          this.review.id,
          this.$store.state.token
        );
        this.review = null;
        // eslint-disable-next-line
        console.log("remove");
        this.$router.push({
          name: "Review"
        });
      } catch (err) {
        // eslint-disable-next-line
        console.log(err);
      }
    }
  },

  async mounted() {
    try {
      const reviewId = this.$store.state.route.params.reviewId;
      this.review = (
        await ReviewService.getReviewById(reviewId, this.$store.state.token)
      ).data;
      if (this.review == "") {
        return this.$router.push("/404");
      }
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  }
};
</script>

<style scoped></style>
