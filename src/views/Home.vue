<template>
  <div class="home">
    <div class="row" v-if="$parent.isLoggedIn()">
      <div class="col col-xl-2"></div>
      <main
        class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12"
      >
        <div class="box shadow-sm border rounded bg-white mb-3">
          <div class="box-title p-3 d-flex align-items-top">
            <h6 class="m-0">Recent</h6>
            <h6 class="ml-1">Hot</h6>
            <h6 class="ml-1">Top</h6>
            <h6 class="ml-1">Popular</h6>
          </div>
          <div class="box-body p-0"></div>
        </div>
        <div class="box shadow-sm border rounded bg-white mb-3">
          <div class="box-body p-0">
            <Post
              v-for="post in posts"
              v-bind:post="post"
              v-bind:key="post.id"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Post from "../components/Post";

export default {
  components: {
    Post,
  },
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      posts: [],
    };
  },
  created: function() {
    if (this.$parent.isLoggedIn()) {
      this.apiCall();
    } else {
      this.message = "not logged in";
    }
  },
  methods: {
    apiCall: function() {
      axios.get("/api/posts/subscription/").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>
