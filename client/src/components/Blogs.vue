<template>
  <div>
    <panel title="Blog">
      <div class="row mx-auto">
        <div class="col-md-12 mb-2 mx-auto" style="max-width:90%">
          <SearchBlogs />
          <router-link
            v-if="$store.state.isUserLoggedIn"
            to="/blog/create"
            class="btn btn-success mx-auto w-100 my-3"
          >Create Blog Post</router-link>
        </div>
      </div>
      <div class="row mx-auto" style="max-width: 90%">
        <div class="col-12 col-md-6 col-lg-4" v-for="blog in blogs" :key="blog.id">
          <b-card :title="blog.blogTitle" class="mb-2 mx-auto">
            <img :src="blog.blogIMG" alt class="img-fluid p-2" />
            <b-card-text>
              <span class="font-weight-bold">Written By:</span>
              {{ blog.blogAuthor }}
            </b-card-text>
            <router-link :to="'/blog/' + blog.id" class="btn btn-info d-block">Read Blog</router-link>
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
