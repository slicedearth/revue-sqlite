<template>
  <div>
    <panel title="New Review" class="pt-3">
      <b-form>
        <div class="row mt-3">
          <div class="col-12 mx-auto" style="max-width:75%">
            <!-- Title -->
            <b-form-group id="title-group" label="Title" label-for="title">
              <b-form-input
                id="title"
                type="text"
                required
                placeholder="Review Title"
                v-model="$v.review.reviewTitle.$model"
                :state="
                  $v.review.reviewTitle.$dirty
                    ? !$v.review.reviewTitle.$error
                    : null
                "
                aria-describedby="title-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="title-feedback">
                This field is required and must contain between 5 and 150
                characters.
              </b-form-invalid-feedback>
            </b-form-group>
            <!-- Author -->
            <b-form-group id="author-group" label="Author" label-for="author">
              <b-form-input
                id="author"
                type="text"
                required
                placeholder="Your Name / Alias"
                v-model="$v.review.reviewAuthor.$model"
                :state="
                  $v.review.reviewAuthor.$dirty
                    ? !$v.review.reviewAuthor.$error
                    : null
                "
                aria-describedby="author-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="author-feedback">
                This field is required and must contain between 3 and 20
                alphanumeric characters.
              </b-form-invalid-feedback>
            </b-form-group>
            <!-- Album -->
            <b-form-group id="album-group" label="Album" label-for="album">
              <b-form-input
                id="album"
                type="text"
                required
                placeholder="Album Title"
                v-model="$v.review.album.$model"
                :state="$v.review.album.$dirty ? !$v.review.album.$error : null"
                aria-describedby="album-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="album-feedback">
                This field is required and must contain at least 1 character.
              </b-form-invalid-feedback>
            </b-form-group>
            <!-- Artist -->
            <b-form-group id="artist-group" label="Artist" label-for="artist">
              <b-form-input
                id="artist"
                type="text"
                required
                placeholder="Name of Artist / Band"
                v-model="$v.review.artist.$model"
                :state="
                  $v.review.artist.$dirty ? !$v.review.artist.$error : null
                "
                aria-describedby="artist-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="artist-feedback">
                This field is required and must contain at least 1 character.
              </b-form-invalid-feedback>
            </b-form-group>
            <!-- Genre -->
            <b-form-group id="genre-group" label="Genre" label-for="genre">
              <b-form-input
                id="genre"
                type="text"
                required
                placeholder="Name of Genre"
                v-model="$v.review.genre.$model"
                :state="$v.review.genre.$dirty ? !$v.review.genre.$error : null"
                aria-describedby="genre-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="genre-feedback">
                This field is required and must contain at least 1 character.
              </b-form-invalid-feedback>
            </b-form-group>
            <!-- Album Art -->
            <b-form-group
              id="albumArt-group"
              label="Album Art"
              label-for="albumArt"
            >
              <b-form-input
                id="albumArt"
                type="text"
                required
                placeholder="Album Art URL"
                v-model="$v.review.albumArt.$model"
                :state="
                  $v.review.albumArt.$dirty ? !$v.review.albumArt.$error : null
                "
                aria-describedby="albumArt-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="albumArt-feedback">
                This field is required. You must provide a direct link to an
                image. The link must contain http:// or https://
                <br />(eg.
                https://images.unsplash.com/photo-1573061598644-36432d1a4198)
              </b-form-invalid-feedback>
            </b-form-group>
            <!-- Review Text -->
            <b-form-group
              id="reviewText-group"
              label="Review"
              label-for="review-text"
            >
              <b-form-textarea
                id="review-text"
                type="text"
                required
                placeholder="Review Content"
                rows="10"
                max-rows="15"
                v-model="$v.review.reviewText.$model"
                :state="
                  $v.review.reviewText.$dirty
                    ? !$v.review.reviewText.$error
                    : null
                "
                aria-describedby="reviewText-feedback"
              ></b-form-textarea>
              <b-form-invalid-feedback id="artist-feedback">
                This field is required and must contain at least 15 characters.
              </b-form-invalid-feedback> </b-form-group
            ><b-button @click="create" class="w-100 mb-4" variant="success"
              >Submit</b-button
            >
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
  alphaNum,
  url,
} from "vuelidate/lib/validators";
export default {
  name: "CreateReview",
  components: {
    Panel,
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
        reviewText: null,
      },
    };
  },
  mixins: [validationMixin],
  validations: {
    review: {
      reviewTitle: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(150),
      },
      albumArt: {
        required,
        url: url,
        minLength: minLength(5),
      },
      reviewAuthor: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
        alphaNum: alphaNum,
      },
      album: {
        required,
        minLength: minLength(1),
      },
      artist: {
        required,
        minLength: minLength(1),
      },
      genre: {
        required,
        minLength: minLength(1),
      },
      reviewText: {
        required,
        minLength: minLength(15),
      },
    },
  },
  // Authentication Redirect
  mounted() {
    if (!this.$store.state.isUserLoggedIn) {
      return this.$router.push("/403");
    }
  },
  methods: {
    async create() {
      this.$v.review.$touch();
      if (this.$v.review.$anyError) {
        return;
      }
      try {
        console.log(this.$store.state.token);
        await ReviewService.postReviews(this.review, this.$store.state.token);
        this.$router.push({
          name: "Review",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
