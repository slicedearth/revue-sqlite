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
          {{ blog.blogAuthor }}
        </div>

        <br />

        <div class="col-md-12 m-auto">
          <p class="mt-2">{{ blog.blogText }}</p>
        </div>
      </div>
      <router-link
        v-if="$store.state.isUserLoggedIn"
        :to="'/blog/' + blog.id + '/edit'"
        class="mr-2 w-100 btn btn-success"
        >Edit</router-link
      >
      <b-button
        v-if="$store.state.isUserLoggedIn"
        @click="delBlog"
        class="btn btn-secondary w-100 mr-2"
        >Delete</b-button
      >
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
  methods: {
    async delBlog() {
      try {
        // eslint-disable-next-line
        console.log("delete");
        this.blog = await BlogService.deleteBlog(this.blog.id);
        this.blog = null;
        // eslint-disable-next-line
        console.log("remove");
        this.$router.push({
          name: "Blog"
        });
      } catch (err) {
        // eslint-disable-next-line
        console.log(err);
      }
    }
  },
  async mounted() {
    try {
      const blogId = this.$store.state.route.params.blogId;
      this.blog = (await BlogService.getBlogById(blogId)).data;
      if (this.blog == "") {
        return this.$router.push("/404");
      }
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  }
};
</script>

<style scoped></style>
