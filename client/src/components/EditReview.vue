<template>
  <div>
    <panel title="Edit Review">
      <b-form>
        <div class="row">
          <div class="col-12 mx-auto" style="max-width:75%">
            <!-- Title -->
            <b-form-group
              id="title-group"
              label="Title"
              label-for="title"
              description="Please enter the title for your review"
            >
              <b-form-input
                id="title"
                type="text"
                required
                placeholder="Enter Title"
                v-model="$v.review.reviewTitle.$model"
                :state="$v.review.reviewTitle.$dirty?!$v.review.reviewTitle.$error:null"
                aria-describedby="title-feedback"
              ></b-form-input>
              <b-form-invalid-feedback
                id="title-feedback"
              >This field is required and must contain at least 5 characters.</b-form-invalid-feedback>
            </b-form-group>
            <!-- Author -->
            <b-form-group
              id="author-group"
              label="Author"
              label-for="author"
              description="Please enter your username"
            >
              <b-form-input
                id="author"
                type="text"
                required
                placeholder="Enter Username"
                v-model="$v.review.reviewAuthor.$model"
                :state="$v.review.reviewAuthor.$dirty? !$v.review.reviewAuthor.$error:null"
                aria-describedby="author-feedback"
              ></b-form-input>
              <b-form-invalid-feedback
                id="author-feedback"
              >This field is required and must contain between 3 and 20 alphanumeric characters.</b-form-invalid-feedback>
            </b-form-group>
            <!-- Album -->
            <b-form-group
              id="album-group"
              label="Album"
              label-for="album"
              description="Please enter the album title"
            >
              <b-form-input
                id="album"
                type="text"
                required
                placeholder="Enter Album"
                v-model="$v.review.album.$model"
                :state="$v.review.album.$dirty?!$v.review.album.$error:null"
                aria-describedby="album-feedback"
              ></b-form-input>
              <b-form-invalid-feedback
                id="album-feedback"
              >This field is required and must contain at least 1 character.</b-form-invalid-feedback>
            </b-form-group>
            <!-- Artist -->
            <b-form-group
              id="artist-group"
              label="Artist"
              label-for="artist"
              description="Please enter the name of the artist"
            >
              <b-form-input
                id="artist"
                type="text"
                required
                placeholder="Enter Artist"
                v-model="$v.review.artist.$model"
                :state="$v.review.artist.$dirty?!$v.review.artist.$error:null"
                aria-describedby="artist-feedback"
              ></b-form-input>
              <b-form-invalid-feedback
                id="artist-feedback"
              >This field is required and must contain at least 1 character.</b-form-invalid-feedback>
            </b-form-group>
            <!-- Genre -->
            <b-form-group
              id="genre-group"
              label="Genre"
              label-for="genre"
              description="Please enter the genre of the album"
            >
              <b-form-input
                id="genre"
                type="text"
                required
                placeholder="Enter Genre"
                v-model="$v.review.genre.$model"
                :state="$v.review.genre.$dirty?!$v.review.genre.$error:null"
                aria-describedby="genre-feedback"
              ></b-form-input>
              <b-form-invalid-feedback
                id="genre-feedback"
              >This field is required and must contain at least 1 character.</b-form-invalid-feedback>
            </b-form-group>
            <!-- Album Art -->
            <b-form-group
              id="albumArt-group"
              label="Album Art"
              label-for="albumArt"
              description="Please provide the url of the album art."
            >
              <b-form-input
                id="albumArt"
                type="text"
                required
                v-model="$v.review.albumArt.$model"
                :state="$v.review.albumArt.$dirty?!$v.review.albumArt.$error:null"
                aria-describedby="albumArt-feedback"
              ></b-form-input>
              <b-form-invalid-feedback
                id="albumArt-feedback"
              >This field is required. You must provide a link to an image.</b-form-invalid-feedback>
            </b-form-group>
            <!-- Review Text -->
            <b-form-group
              id="reviewText-group"
              label="Review Text"
              label-for="review-text"
              description="Please enter your review"
            >
              <b-form-textarea
                id="review-text"
                type="text"
                required
                placeholder="Enter Review"
                rows="10"
                max-rows="15"
                v-model="$v.review.reviewText.$model"
                :state="$v.review.reviewText.$dirty?!$v.review.reviewText.$error:null"
                aria-describedby="reviewText-feedback"
              ></b-form-textarea>
              <b-form-invalid-feedback
                id="artist-feedback"
              >This field is required and must contain at least 15 characters.</b-form-invalid-feedback>
            </b-form-group>
            <div class="col-12">
              <b-button @click="save" class="w-100">Submit</b-button>
            </div>
          </div>
        </div>
      </b-form>
    </panel>
  </div>
</template>

<script>
import ReviewService from "@/services/ReviewService";
import Panel from "@/components/Panel";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  alphaNum
} from "vuelidate/lib/validators";
export default {
  name: "EditReview",
  components: {
    Panel
  },
  data() {
    return {
      review: {
        reviewTitle: null,
        albumArt: null,
        reviewAuthor: null,
        album: null,
        artist: null,
        genre: null,
        reviewText: null
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    review: {
      reviewTitle: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(150)
      },
      albumArt: {
        required,
        minLength: minLength(5)
      },
      reviewAuthor: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
        alphaNum: alphaNum
      },
      album: {
        required,
        minLength: minLength(1)
      },
      artist: {
        required,
        minLength: minLength(1)
      },
      genre: {
        required,
        minLength: minLength(1)
      },
      reviewText: {
        required,
        minLength: minLength(15)
      }
    }
  },
  methods: {
    async save() {
      this.$v.review.$touch();
      if (this.$v.review.$anyError) {
        return;
      }
      try {
        await ReviewService.putReviewById(
          this.$store.state.route.params.reviewId,
          this.review
        );
        this.$router.push({
          name: "ViewReview",
          params: {
            reviewId: this.$store.state.route.params.reviewId
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
    try {
      const reviewId = this.$store.state.route.params.reviewId;
      this.review = (await ReviewService.getReviewById(reviewId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
</style>