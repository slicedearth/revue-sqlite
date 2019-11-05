<template>
  <div>
    <b-jumbotron
      header="Welcome to ReVue"
      lead="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      bg-variant="transparent"
    ></b-jumbotron>
    <panel title="Latest Reviews">
      <div class="row m-1">
        <div class="col-md-12">
          <div v-for="review in reviews.slice(0,3)" :key="review.id">
            <b-card
              :title="review.reviewTitle"
              tag="reviews"
              style="max-width: 90%"
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
          <router-link to="/reviews" class="col-md-12 btn btn-primary" id="moreRev">More Reviews</router-link>
        </div>
      </div>
    </panel>
    <panel title="Latest Blog Posts">
      <div class="row m-1">
        <div class="col-md-12">
          <div v-for="blog in blogs.slice(0,3)" :key="blog.id">
            <b-card
              :src="blog.blogIMG"
              :title="blog.blogTitle"
              tag="blogs"
              style="max-width: 90%"
              class="mb-2 mx-auto"
            >
              <b-card-text>by&nbsp;{{blog.blogAuthor}}</b-card-text>
              <img :src="blog.blogIMG" alt class="img-fluid p-2" />
              <br />
              <router-link :to="'/blog/' +blog.id" class="btn btn-primary">Read Blog</router-link>
            </b-card>
          </div>
          <router-link to="/blog" class="col-md-12 btn btn-primary mx-auto">More Posts</router-link>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
import ReviewService from "@/services/ReviewService";
import BlogService from "@/services/BlogService";
import Panel from "@/components/Panel";
export default {
  name: "Home",
  components: {
    Panel
  },
  data() {
    return {
      reviews: "",
      blogs: ""
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.reviews = (await ReviewService.getReviews(value)).data;
        this.blogs = (await BlogService.getBlogs(value)).data;
      }
    }
  }
};
</script>

<style>
#moreRev, #morePosts{
  
}
</style>