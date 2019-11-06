<template>
  <div>
    <panel title="Blog">
      <router-link
        v-if="$store.state.isUserLoggedIn"
        to="/blogs/create"
        class="btn btn-warning mr-2 w-100 mb-3"
      >Create Blog Post</router-link>
      <div class="row m-1">
        <div class="col-md-12">
          <div v-for="blog in blogs" :key="blog.id">
            <b-card :title="blog.blogTitle" tag="blogs" style="max-width: 90%" class="mb-2 mx-auto">
              <b-card-text>by&nbsp;{{blog.blogAuthor}}</b-card-text>
              <img :src="blog.blogIMG" alt class="img-fluid p-2" />
              <br />
              <router-link :to="'/blog/' +blog.id" class="btn btn-primary">Read Blog</router-link>
            </b-card>
          </div>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
import BlogService from "@/services/BlogService";
import Panel from "@/components/Panel";
export default {
  name: "Blog",
  components: {
    Panel
  },
  data() {
    return {
      blogs: ""
    };
  },
  async mounted() {
    this.blogs = (await BlogService.getBlogs()).data;
  }
};
</script>

<style>
</style>