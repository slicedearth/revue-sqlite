<template>
  <div>
    <panel title="New Blog Post" class="pt-3">
      <b-form>
        <div class="row mt-3">
          <div class="col-12 mx-auto" style="max-width:75%">
            <!-- Title -->
            <b-form-group id="title-group" label="Title" label-for="title">
              <b-form-input
                id="title"
                type="text"
                required
                placeholder="Blog Post Title"
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
            <b-form-group id="author-group" label="Author" label-for="author">
              <b-form-input
                id="author"
                type="text"
                required
                placeholder="Your Name / Alias"
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
            >
              <b-form-input
                id="blogIMG"
                type="text"
                required
                placeholder="Blog Post Image URL"
                v-model="$v.blog.blogIMG.$model"
                :state="$v.blog.blogIMG.$dirty ? !$v.blog.blogIMG.$error : null"
                aria-describedby="blogIMG-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="blogIMG-feedback">
                This field is required. You must provide a direct link to an
                image. The link must contain http:// or https://
                <br />(eg.
                https://images.unsplash.com/photo-1573061598644-36432d1a4198)
              </b-form-invalid-feedback>
            </b-form-group>
            <!-- Blog Text -->
            <b-form-group
              id="blogText-group"
              label="Blog Text"
              label-for="blogText"
            >
              <b-form-textarea
                id="blogText"
                type="text"
                required
                placeholder="Blog Post"
                rows="10"
                max-rows="15"
                v-model="$v.blog.blogText.$model"
                :state="
                  $v.blog.blogText.$dirty ? !$v.blog.blogText.$error : null
                "
                aria-describedby="blogText-feedback"
              ></b-form-textarea>
              <b-form-invalid-feedback id="blogText-feedback">
                This field is required and must contain at least 15 characters.
              </b-form-invalid-feedback>
            </b-form-group>
            <b-button @click="create" class="w-100 mb-4">Submit</b-button>
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
  alphaNum,
  url,
} from "vuelidate/lib/validators";
export default {
  name: "CreateBlog",
  components: {
    Panel,
  },
  data() {
    return {
      blog: {
        blogTitle: null,
        blogIMG: null,
        blogAuthor: null,
        blogText: null,
      },
    };
  },
  mixins: [validationMixin],
  validations: {
    blog: {
      blogTitle: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(150),
      },
      blogIMG: {
        required,
        url: url,
        minLength: minLength(5),
      },
      blogAuthor: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
        alphaNum: alphaNum,
      },
      blogText: {
        required,
        minLength: minLength(15),
      },
    },
  },
  //Authentication Redirect
  mounted() {
    if (!this.$store.state.isUserLoggedIn) {
      return this.$router.push("/403");
    }
  },
  methods: {
    async create() {
      this.$v.blog.$touch();
      if (this.$v.blog.$anyError) {
        return;
      }
      try {
        await BlogService.postBlogs(this.blog, this.$store.state.token);
        this.$router.push({
          name: "Blog",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
