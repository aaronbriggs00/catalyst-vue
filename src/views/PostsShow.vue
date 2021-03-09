<template>
  <div class="posts-show">
    <h1>{{ post }}</h1>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to a post",
      post: [],
    };
  },
  created: function() {
    this.apiCall();
  },
  methods: {
    apiCall: function() {
      axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
    },
  },
};
</script>
