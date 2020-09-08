<template>
  <panel>
    <b-jumbotron class="jumbo" fluid text-variant="white">
      <div class="container-fluid">
        <h1 class="display-3">
          Welcome to
          <span class="jumbotitle">ReVue</span>
        </h1>
      </div>
    </b-jumbotron>
    <!-- Review Section -->

    <div class="row mx-auto">
      <div class="col-md-12 content-width">
        <h2 class="section-head">Latest Reviews</h2>
        <div class="band-home mt-3">
          <div
            v-for="review in [...reviews].reverse().slice(0, 3)"
            :key="review.id"
            class="crad"
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
                  Album: <span>{{ review.album }}</span> <br />Artist:
                  <span>{{ review.artist }}</span>

                  <br />Reviewed By:<span> {{ review.reviewAuthor }}</span>
                </p>
              </div>
              <h3 class="revTitle mt-2">{{ review.reviewTitle }}</h3>
            </router-link>
          </div>
        </div>
        <b-button to="/reviews" class="my-3" id="moreRev" variant="dark" block
          >More Reviews</b-button
        >
      </div>
    </div>
    <!-- Blog Section -->
    <div class="row mx-auto">
      <div class="col-md-12 content-width">
        <h2 class="section-head">Latest Blog Posts</h2>
        <div class="band-home mt-3">
          <div
            v-for="blog in [...blogs].reverse().slice(0, 3)"
            :key="blog.id"
            class="crad"
          >
            <router-link
              :to="'/blog/' + blog.id"
              class="text-decoration-none pb-3"
            >
              <div
                class="thumb"
                v-bind:style="{ backgroundImage: 'url(' + blog.blogIMG + ')' }"
              >
                <p class="crad-badge font-weight-bold text-truncate">
                  Author: <span>{{ blog.blogAuthor }}</span>
                </p>
              </div>
              <h3 class="blogTitle mt-2">{{ blog.blogTitle }}</h3>
            </router-link>
          </div>
        </div>
        <b-button to="/blog" class="my-3" id="moreBlog" variant="dark" block
          >More Blog Posts</b-button
        >
      </div>
    </div>

    <!-- <div class="row m-1">
        <div class="col-md-12">
          <div v-for="blog in blogs.slice(0, 3)" :key="blog.id">
            <b-card :title="blog.blogTitle" class="mb-2 mx-auto content-width">
              <b-card-text>by&nbsp;{{ blog.blogAuthor }}</b-card-text>
              <img :src="blog.blogIMG" alt class="img-fluid p-2" />
              <br />
              <b-button :to="'/blog/' + blog.id" class="btn btn-info" block>Read Blog</b-button>
            </b-card>
          </div>
          <b-button
            to="/blog"
            class="col-md-12 btn btn-secondary mb-2 mx-auto content-width"
            block
          >See More Blog Posts</b-button>
        </div>
    </div>-->
  </panel>
</template>

<script>
import ReviewService from "@/services/ReviewService";
import BlogService from "@/services/BlogService";
import Panel from "@/components/Panel";
export default {
  name: "root",
  components: {
    Panel,
  },
  data() {
    return {
      reviews: "",
      blogs: "",
    };
  },
  async mounted() {
    this.reviews = (await ReviewService.getReviews()).data;
    this.blogs = (await BlogService.getBlogs()).data;
  },
};
</script>

<style>
.band-home {
  display: grid;
  grid-gap: 1rem;
}
@media screen and (min-width: 768px) {
  .band-home {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 992px) {
  .band-home {
    grid-template-columns: repeat(3, 1fr);
  }
}
.jumbo {
  /* background-color: #5b8c89; */
  background: linear-gradient(rgba(42, 39, 42, 0.6) rgba(0, 0, 0, 0.6)),
    url(../assets/florencia-viadana-f74kZNWhfps-unsplash.jpg) center center;
}
.section-head {
  letter-spacing: 0.08em;
}
.jumbotitle {
  text-shadow: 2px 2px black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 0.08em;
}
</style>
