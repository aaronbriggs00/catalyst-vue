import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PostsShow from "../views/Posts/PostsShow.vue";
import PostsIndex from "../views/Posts/PostsIndex.vue";
import PostsNew from "../views/Posts/PostsNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/",
    name: "posts-index",
    component: PostsIndex,
  },
  {
    path: "/posts/new",
    name: "posts-new",
    component: PostsNew,
  },
  {
    path: "/posts/:id",
    name: "posts-show",
    component: PostsShow,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
