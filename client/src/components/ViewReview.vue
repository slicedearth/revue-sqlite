<template>
  <div>
    <panel :title="review.reviewTitle" v-if="review" class="pt-3">
      <!-- Edit and Delete Buttons -->
      <div class="col-md-8 mx-auto text-center">
        <b-button
          v-if="$store.state.isUserLoggedIn"
          :to="'/reviews/' + review.id + '/edit'"
          class="w-50 mx-auto my-3"
          variant="secondary"
          size="lg"
        >
          <i class="fa fa-pencil-square-o fa-fw" aria-hidden="true"></i
          >&nbsp;Edit
        </b-button>
      </div>
      <div class="col-md-8 mx-auto text-center">
        <b-button
          v-if="$store.state.isUserLoggedIn"
          @click="delRev"
          class="w-50 mx-auto mb-3 py-3"
          variant="danger"
          size="lg"
        >
          <i class="fa fa-trash fa-fw" aria-hidden="true"></i>&nbsp;Delete
        </b-button>
      </div>
      <!-- Review -->
      <div class="row mx-0">
        <div class="col-md-8 mx-auto">
          <img
            :src="review.albumArt"
            :alt="review.reviewTitle"
            class="img-fluid rounded shadow"
            style="max-width:50%"
          />
          <div class="mt-3">
            <b>By:</b>
            {{ review.reviewAuthor }}
          </div>
          <div class="mt-3">
            <b>Album:</b>
            {{ review.album }}
            <b>Artist:</b>
            {{ review.artist }}
          </div>
          <div class="my-3 text-left">
            <p
              class="mt-2 pb-4"
              style="white-space: pre-line;"
              v-text="review.reviewText"
            />
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
  name: "ViewReview",
  components: {
    Panel,
  },
  data() {
    return {
      review: null,
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
          name: "Review",
        });
      } catch (err) {
        // eslint-disable-next-line
        console.log(err);
      }
    },
  },

  async mounted() {
    try {
      const reviewId = this.$store.state.route.params.reviewId;
      this.review = (await ReviewService.getReviewById(reviewId)).data;
      // 404 Redirect
      if (this.review == "") {
        return this.$router.push("/404");
      }
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  },
};
</script>

<style></style>
