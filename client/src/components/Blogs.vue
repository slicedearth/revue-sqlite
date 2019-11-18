<template>
  <div>
    <panel title="Blog">
      <div class="row mx-auto">
        <div class="col-md-12 mb-2 mx-auto" style="max-width:90%">
          <SearchBlogs />
          <router-link
            v-if="$store.state.isUserLoggedIn"
            to="/blog/create"
            class="btn btn-warning mx-auto w-100 my-3"
          >Create Blog Post</router-link>
        </div>
      </div>
      <div class="row mx-auto">
        <div class="col-12 col-md-6 col-lg-4" v-for="blog in blogs" :key="blog.id">
          <b-card :title="blog.blogTitle" style="max-width: 90%" class="mb-2 mx-auto">
            <img :src="blog.blogIMG" alt class="img-fluid p-2" />
            <b-card-text>Written By&nbsp;{{ blog.blogAuthor }}</b-card-text>
            <router-link :to="'/blog/' + blog.id" class="btn btn-primary d-block">Read Blog</router-link>
          </b-card>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
import SearchBlogs from "@/components/SearchBlogs";
import BlogService from "@/services/BlogService";
import Panel from "@/components/Panel";
export default {
  name: "Blog",
  components: {
    Panel,
    SearchBlogs
  },
  data() {
    return {
      blogs: ""
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.blogs = (await BlogService.getBlogs(value)).data;
      }
    }
  }
};
</script>

<style></style>
