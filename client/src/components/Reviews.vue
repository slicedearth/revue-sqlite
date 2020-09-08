<template>
  <panel title="Reviews" class="pt-3">
    <div class="row mx-auto mt-3">
      <div class="col-md-12 content-width">
        <SearchReviews />
        <router-link
          v-if="$store.state.isUserLoggedIn"
          to="/reviews/create"
          class="btn btn-success mx-auto w-100 mt-3"
          >Create Review</router-link
        >
      </div>
    </div>
    <div class="row mx-auto">
      <div class="col-md-12 content-width">
        <div class="band py-3">
          <div
            class="crad"
            v-for="review in reviews.slice().reverse()"
            :key="review.id"
          >
            <router-link
              :to="'/reviews/' + review.id"
              class="text-decoration-none pb-3"
            >
              <div
                class="thumb"
                v-bind:style="{
                  backgroundImage: 'url(' + review.albumArt + ')',
                }"
              >
                <p class="crad-badge font-weight-bold text-truncate">
                  Album:
                  <span>{{ review.album }}</span>
                  <br />Artist:
                  <span>{{ review.artist }}</span>
                  <br />Reviewed By:
                  <span>{{ review.reviewAuthor }}</span>
                </p>
              </div>
              <h1 class="mt-2 revTitle">{{ review.reviewTitle }}</h1>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </panel>
</template>

<script>
import SearchReviews from "@/components/SearchReviews";
import ReviewService from "@/services/ReviewService";
import Panel from "@/components/Panel";
export default {
  name: "Review",
  components: {
    Panel,
    SearchReviews,
  },
  data() {
    return {
      reviews: "",
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.reviews = (await ReviewService.getReviews(value)).data;
      },
    },
  },
};
</script>

<style>
.content-width {
  max-width: 100%;
  margin: auto;
}
@media screen and (min-width: 768px) {
  .content-width {
    max-width: 90%;
  }
}
@media screen and (min-width: 992px) {
  .content-width {
    max-width: 80%;
  }
}
/* ........................................................................................................................................................................................... */
.band {
  display: grid;
  grid-gap: 1rem;
}
@media screen and (min-width: 768px) {
  .band {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 992px) {
  .band {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  .band {
    grid-template-columns: repeat(4, 1fr);
  }
}
.crad {
  /* min-height: 100%; */
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #444;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;
  overflow: hidden;
}

.crad:hover {
  top: -2px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
}

.crad article {
  padding: 20px;
  display: flex;

  flex: 1;
  justify-content: space-between;
  flex-direction: column;
}
.crad .thumb {
  position: relative;
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
}
.text-truncate {
  max-width: 100%;
}
.crad-badge {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  /* border: black solid 2px; */
  border-top-right-radius: 6px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.badge-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.crad p {
  flex: 1;
  font-size: 0.7rem;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.4;
  text-align: left;
  margin-bottom: 0;
}

.revTitle {
  font-size: 20px;
  margin: 0;
  color: #333;
  letter-spacing: 0.05em;
}
.crad span {
  font-size: 0.7rem;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 2em 0 0 0;
}
</style>
