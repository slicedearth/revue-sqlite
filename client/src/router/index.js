import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Reviews from "@/components/Reviews";
import Register from "@/components/Register";
import Login from "@/components/Login";
import CreateReview from "@/components/CreateReview";
import ViewReview from "@/components/ViewReview";
import EditReview from "@/components/EditReview";
import Articles from "@/components/Articles";
import CreateArticle from "@/components/CreateArticle";
import ViewArticle from "@/components/ViewArticle";
import EditArticle from "@/components/EditArticle";

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
    },
    {
      path: "/news",
      name: "articles",
      component: Articles
    },
    {
      path: "/news/create",
      name: "createarticles",
      component: CreateArticle
    },
    {
      path: "/news/:articleId",
      name: "viewarticles",
      component: ViewArticle
    },
    {
      path: "/news/:newsId/edit",
      name: "editarticles",
      component: EditArticle
    }
  ]
});
