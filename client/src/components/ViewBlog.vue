<template>
  <div>
    <panel :title="blog.blogTitle" v-if="blog">
      <div class="row">
        <div class="col-md-12">
          <img
            :src="blog.blogIMG"
            :alt="blog.blogTitle"
            class="img-fluid rounded shadow"
            style="max-width:80%"
          />
        </div>
        <div class="col-md-12 mt-3">
          <b>By:</b>
          {{blog.blogAuthor}}
        </div>

        <br />

        <div class="col-md-12 m-auto">
          <p class="mt-2">{{blog.blogText}}</p>
        </div>
      </div>
      <router-link
        v-if="$store.state.isUserLoggedIn"
        :to="'/blog/' + blog.id + '/edit'"
        class="mr-2 w-100 btn btn-success"
      >Edit</router-link>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
import BlogService from "@/services/BlogService";
export default {
  name: "ViewBlog",
  components: {
    Panel
  },
  data() {
    return {
      blog: null
    };
  },
  async mounted() {
    try {
      const blogId = this.$store.state.route.params.blogId;
      this.blog = (await BlogService.getBlogById(blogId)).data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style scoped>
</style>