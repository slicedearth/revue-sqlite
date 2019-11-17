<template>
  <div>
    <panel title="Edit Blog Post">
      <b-form>
        <div class="row">
          <div class="col-12 mx-auto" style="max-width:75%">
            <!-- Title -->
            <b-form-group
              id="title-group"
              label="Title"
              label-for="title"
              description="Update the title for your blog post"
            >
              <b-form-input
                id="title"
                type="text"
                required
                placeholder="Enter Title"
                v-model="$v.blog.blogTitle.$model"
                :state="
                  $v.blog.blogTitle.$dirty ? !$v.blog.blogTitle.$error : null
                "
                aria-describedby="title-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="title-feedback">
                This field is required and must contain between 5 and 150
                characters.
              </b-form-invalid-feedback>
            </b-form-group>
            <!-- Author -->
            <b-form-group
              id="author-group"
              label="Author"
              label-for="author"
              description="Update your username"
            >
              <b-form-input
                id="author"
                type="text"
                required
                placeholder="Enter Username"
                v-model="$v.blog.blogAuthor.$model"
                :state="
                  $v.blog.blogAuthor.$dirty ? !$v.blog.blogAuthor.$error : null
                "
                aria-describedby="author-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="author-feedback">
                This field is required and must contain between 3 and 20
                alphanumeric characters.
              </b-form-invalid-feedback>
            </b-form-group>
            <!-- Blog Image -->
            <b-form-group
              id="blogIMG-group"
              label="Blog Post Image"
              label-for="blogIMG"
              description="Provide the updated url of the blog post image."
            >
              <b-form-input
                id="blogIMG"
                type="text"
                required
                v-model="$v.blog.blogIMG.$model"
                :state="$v.blog.blogIMG.$dirty ? !$v.blog.blogIMG.$error : null"
                aria-describedby="blogIMG-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="blogIMG-feedback">
                This field is required. You must provide a link to an
                image.
              </b-form-invalid-feedback>
            </b-form-group>
            <!-- Blog Text -->
            <b-form-group
              id="blogText-group"
              label="Blog Text"
              label-for="blogText"
              description="Update your blog post"
            >
              <b-form-textarea
                id="blogText"
                type="text"
                required
                placeholder="Enter Blog Post"
                rows="10"
                max-rows="15"
                v-model="$v.blog.blogText.$model"
                :state="
                  $v.blog.blogText.$dirty ? !$v.blog.blogText.$error : null
                "
                aria-describedby="blogText-feedback"
              ></b-form-textarea>
              <b-form-invalid-feedback id="blogText-feedback">
                This field is required and must contain at least 15
                characters.
              </b-form-invalid-feedback>
            </b-form-group>
            <div class="col-12">
              <b-button @click="save" class="w-100">Submit</b-button>
            </div>
          </div>
        </div>
      </b-form>
    </panel>
  </div>
</template>

<script>
import BlogService from "@/services/BlogService";
import Panel from "@/components/Panel";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  alphaNum
} from "vuelidate/lib/validators";
export default {
  name: "EditBlog",
  components: {
    Panel
  },
  data() {
    return {
      blog: {
        blogTitle: null,
        blogIMG: null,
        blogAuthor: null,
        blogText: null
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    blog: {
      blogTitle: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(150)
      },
      blogIMG: {
        required,
        minLength: minLength(5)
      },
      blogAuthor: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
        alphaNum: alphaNum
      },
      blogText: {
        required,
        minLength: minLength(15)
      }
    }
  },
  methods: {
    async save() {
      this.$v.blog.$touch();
      if (this.$v.blog.$anyError) {
        return;
      }
      try {
        await BlogService.putBlogById(
          this.$store.state.route.params.blogId,
          this.blog,
          this.$store.state.token
        );
        this.$router.push({
          name: "viewblogs",
          params: {
            blogId: this.$store.state.route.params.blogId
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async mounted() {
    try {
      const blogId = this.$store.state.route.params.blogId;
      this.blog = (await BlogService.getBlogById(blogId)).data;
      // 404 Redirect
      if (this.blog == "") {
        return this.$router.push("/404");
      }
      // Authentication Redirect
      if (!this.$store.state.isUserLoggedIn) {
        return this.$router.push("/403");
      }
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>
