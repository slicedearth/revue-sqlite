<template>
  <div>
    <panel :title="blog.blogTitle" v-if="blog" class="pt-3">
      <!-- Edit and Delete Buttons -->
      <div class="col-md-8 mx-auto text-center">
        <b-button
          v-if="$store.state.isUserLoggedIn"
          :to="'/blog/' + blog.id + '/edit'"
          class="w-50 mx-auto my-3"
          variant="secondary"
          size="lg"
          ><i class="fa fa-pencil-square-o fa-fw" aria-hidden="true"></i>
          &nbsp;Edit</b-button
        >
      </div>
      <div class="col-md-8 mx-auto text-center">
        <b-button
          v-if="$store.state.isUserLoggedIn"
          @click="delBlog"
          class="w-50 mx-auto mb-3 py-3"
          variant="danger"
          size="lg"
        >
          <i class="fa fa-trash fa-fw" aria-hidden="true"></i>&nbsp;Delete
        </b-button>
      </div>

      <!-- Blog Post -->
      <div class="row mx-0">
        <div class="col-md-8 mx-auto">
          <img
            :src="blog.blogIMG"
            :alt="blog.blogTitle"
            class="img-fluid rounded shadow"
            style="max-width:50%"
          />
          <div class="mt-3">
            <b>By:</b>
            {{ blog.blogAuthor }}
          </div>
          <br />
          <div class="my-3 text-left">
            <p
              class="mt-2 pb-4"
              style="white-space: pre-line;"
              v-text="blog.blogText"
            ></p>
          </div>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
import BlogService from "@/services/BlogService";
export default {
  name: "ViewBlog",
  components: {
    Panel,
  },
  data() {
    return {
      blog: null,
    };
  },
  methods: {
    async delBlog() {
      try {
        // eslint-disable-next-line
        console.log("delete");
        this.blog = await BlogService.deleteBlog(
          this.blog.id,
          this.$store.state.token
        );
        this.blog = null;
        // eslint-disable-next-line
        console.log("remove");
        this.$router.push({
          name: "Blog",
        });
      } catch (err) {
        // eslint-disable-next-line
        console.log(err);
      }
    },
  },
  async mounted() {
    try {
      const blogId = this.$store.state.route.params.blogId;
      this.blog = (await BlogService.getBlogById(blogId)).data;
      // 404 Redirect
      if (this.blog == "") {
        return this.$router.push("/404");
      }
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  },
};
</script>

<style></style>
