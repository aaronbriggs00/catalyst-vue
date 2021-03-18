<template>
  <div class="posts-index">
    <Post v-for="post in posts" v-bind:post="post" v-bind:key="post.id" />
    <router-link to="/posts/new" tag="button">create new post</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Post from "../../components/Post";

export default {
  components: {
    Post,
  },
  data: function() {
    return {
      posts: [],
    };
  },
  created: function() {
    this.apiCall();
  },
  methods: {
    apiCall: function() {
      axios.get(`/api/posts`).then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>
