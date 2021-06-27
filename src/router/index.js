import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PostsShow from "../views/Posts/PostsShow.vue";
import PostsNew from "../views/Posts/PostsNew.vue";
import BoardsShow from "../views/Boards/BoardsShow.vue";
import BoardsIndex from "../views/Boards/BoardsIndex.vue";
import Signup from "../views/UserAuth/Signup.vue";
import Login from "../views/UserAuth/Login.vue";
import Logout from "../views/UserAuth/Logout.vue";
import Profile from "../views/Profile/Profile.vue";
import ProfileEdit from "../views/Profile/ProfileEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/boards/:boardTitle/posts/new",
    name: "posts-new",
    component: PostsNew,
  },
  {
    path: "/boards/:boardTitle/posts/:id",
    name: "posts-show",
    component: PostsShow,
  },
  {
    path: "/boards/:boardTitle",
    name: "boards-show",
    component: BoardsShow,
  },
  {
    path: "/boards",
    name: "boards-index",
    component: BoardsIndex,
  },
  //UserAuth
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  //EndUserAuth
  //Profile
  {
    path: "/users/:id",
    name: "profile",
    component: Profile,
  },
  {
    path: "/users/:id/edit",
    name: "profile-edit",
    component: ProfileEdit,
  },
  //EndProfile
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
