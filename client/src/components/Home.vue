<template>
  <div>
    <b-jumbotron
      header="Welcome to ReVue"
      lead="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      bg-variant="transparent"
    ></b-jumbotron>
    <div class="row m-1">
      <div class="col-md-10">
        <h2>Latest Reviews</h2>
        <div v-for="review in reviews.slice(0,4)" :key="review.id">
          <b-card :title="review.reviewTitle" tag="reviews" style="max-width: 100%" class="mb-2">
            <b-card-text>{{review.album}}</b-card-text>
            <b-card-text>{{review.artist}}</b-card-text>
            <b-card-text>By&nbsp;{{review.reviewAuthor}}</b-card-text>
            <router-link :to="'/reviews/' +review.id" class="btn btn-primary">Full Review</router-link>
          </b-card>
        </div>
      </div>
      <div class="col-md-2 bg-dark p-2 sideBlog">
        <h2 class="text-white">Blog</h2>
        <div v-for="blog in blogs.slice(0,6)" :key="blog.id">
          <div class="row p-1 text-white sideBlogContent">
            <div class="col-md-12">
              <h5>{{blog.blogTitle}}</h5>
              <img :src="blog.blogIMG" alt class="img-fluid" style="max-height:2rem" />
              <p>{{blog.blogAuthor}}</p>
              <router-link :to="'/blog/' +blog.id" class="btn btn-sm btn-primary">Read More</router-link>
            </div>
          </div>
          <!-- <b-card
            :title="blog.blogTitle"
            tag="reviews"
            style="max-width: 100%;height:1rem;"
            class="mb-2"
          >
            <img class="img-fluid" :src="blog.blogIMG" alt />
            <b-card-text>{{blog.blogAuthor}}</b-card-text>
            <router-link :to="'/blog/' +blog.id" class="btn btn-primary">Read More</router-link>
          </b-card>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewService from "@/services/ReviewService";
import BlogService from "@/services/BlogService";
export default {
  name: "Home",
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
/* .sideBlogContent {
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  height: 2rem;
} */
</style>