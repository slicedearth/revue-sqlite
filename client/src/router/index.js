import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Reviews from "@/components/Reviews";
import CreateReview from "@/components/CreateReview";
import ViewReview from "@/components/ViewReview";
import EditReview from "@/components/EditReview";
import Blogs from "@/components/Blogs";
import CreateBlog from "@/components/CreateBlog";
import ViewBlog from "@/components/ViewBlog";
import EditBlog from "@/components/EditBlog";

Vue.use(Router);
export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "root",
      component: Home
    },
    {
      path: "/reviews",
      name: "Review",
      component: Reviews
    },
    {
      path: "/reviews/create",
      name: "createreview",
      component: CreateReview
    },
    {
      path: "/reviews/:reviewId",
      name: "viewreview",
      component: ViewReview
    },
    {
      path: "/reviews/:reviewId/edit",
      name: "editreview",
      component: EditReview
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blogs
    },
    {
      path: "/blog/create",
      name: "createblogs",
      component: CreateBlog
    },
    {
      path: "/blog/:blogId",
      name: "viewblogs",
      component: ViewBlog
    },
    {
      path: "/blog/:blogId/edit",
      name: "editblogs",
      component: EditBlog
    }
  ]
});
