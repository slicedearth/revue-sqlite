<template>
  <div>
    <panel title="Blog" class="pt-3">
      <div class="row mx-auto mt-3">
        <div class="col-md-12 content-width">
          <SearchBlogs />
          <router-link
            v-if="$store.state.isUserLoggedIn"
            to="/blog/create"
            class="btn btn-success mx-auto w-100 mt-4"
            >Create Blog Post</router-link
          >
        </div>
      </div>
      <div class="row mx-auto">
        <div class="col-md-12 content-width">
          <div class="band py-3">
            <div
              class="crad"
              v-for="blog in blogs.slice().reverse()"
              :key="blog.id"
            >
              <router-link
                :to="'/blog/' + blog.id"
                class="text-decoration-none pb-3"
              >
                <div
                  class="thumb"
                  v-bind:style="{
                    backgroundImage: 'url(' + blog.blogIMG + ')',
                  }"
                >
                  <p class="crad-badge font-weight-bold text-truncate">
                    Author:
                    <span>{{ blog.blogAuthor }}</span>
                  </p>
                </div>
                <h1 class="blogTitle mt-2">{{ blog.blogTitle }}</h1>
              </router-link>
            </div>
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
    SearchBlogs,
  },
  data() {
    return {
      blogs: "",
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.blogs = (await BlogService.getBlogs(value)).data;
      },
    },
  },
};
</script>

<style>
.blogTitle {
  font-size: 20px;
  margin: 0;
  color: #333;
}
</style>
