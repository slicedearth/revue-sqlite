<template>
  <div class="home bg-light">
    <h1>Welome to ReVue</h1>
    <div class="row m-1">
      <div class="col-md-10">
        <h2>News</h2>
        <div v-for="article in articles.slice(0,6)" :key="article.id">
          <b-card :title="article.articleTitle" tag="reviews" style="max-width: 100%;" class="mb-2">
            <img :src="article.articleIMG" alt />
            <b-card-text>{{article.articleAuthor}}</b-card-text>
            <router-link :to="'/news/' +article.id" class="btn btn-primary">Full Article</router-link>
          </b-card>
        </div>
      </div>

      <div class="col-md-2 bg-dark p-2">
        <h2 class="text-white">Latest Reviews</h2>
        <div v-for="review in reviews.slice(0,4)" :key="review.id">
          <b-card :title="review.reviewTitle" tag="reviews" style="max-width: 100%" class="mb-2">
            <b-card-text>{{review.album}}</b-card-text>
            <b-card-text>{{review.artist}}</b-card-text>
            <b-card-text>By&nbsp;{{review.reviewAuthor}}</b-card-text>
            <router-link :to="'/reviews/' +review.id" class="btn btn-primary">Full Review</router-link>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewService from "@/services/ReviewService";
import ArticleService from "@/services/ArticleService";
export default {
  name: "Home",
  data() {
    return {
      reviews: "",
      articles: ""
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.reviews = (await ReviewService.getReviews(value)).data;
        this.articles = (await ArticleService.getArticles(value)).data;
      }
    }
  }
};
</script>

<style>
</style>