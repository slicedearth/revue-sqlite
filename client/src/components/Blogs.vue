<template>
  <div>
    <panel title="Blog">
      <div class="row m-1">
        <div class="col-md-12 mb-2 mx-auto" style="max-width:90%">
          <SearchBlogs />
        </div>
      </div>
      <router-link
        v-if="$store.state.isUserLoggedIn"
        to="/blog/create"
        class="btn btn-warning mr-2 w-100 mb-3"
        >Create Blog Post</router-link
      >
      <div class="row m-1">
        <div class="col-md-12">
          <div v-for="blog in blogs" :key="blog.id">
            <b-card
              :title="blog.blogTitle"
              style="max-width: 90%"
              class="mb-2 mx-auto"
            >
              <b-card-text>by&nbsp;{{ blog.blogAuthor }}</b-card-text>
              <img :src="blog.blogIMG" alt class="img-fluid p-2" />
              <br />
              <router-link :to="'/blog/' + blog.id" class="btn btn-primary"
                >Read Blog</router-link
              >
            </b-card>
          </div>
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
