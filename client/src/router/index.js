import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Reviews from "@/components/Reviews";
// import News from "@/components/News";
import Register from "@/components/Register";
import Login from "@/components/Login";
import CreateReview from "@/components/CreateReview";
import ViewReview from "@/components/ViewReview";
import EditReview from "@/components/EditReview";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/reviews",
      name: "reviews",
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
    }
  ]
});
