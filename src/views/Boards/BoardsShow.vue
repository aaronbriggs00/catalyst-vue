<template>
  <div class="boards-show">
    <Post v-for="post in posts" v-bind:post="post" v-bind:key="post.id" />
    <router-link
      :to="`/boards/${this.$route.params.boardTitle}/posts/new`"
      tag="button"
      >create new post</router-link
    >
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
      board: [],
      posts: [],
    };
  },
  created: function() {
    this.apiCall();
  },
  methods: {
    apiCall: function() {
      axios
        .get(`/api/boards/${this.$route.params.boardTitle}`)
        .then((response) => {
          console.log(response.data);
          this.board = response.data;
          this.posts = this.board.posts;
        });
    },
  },
};
</script>
