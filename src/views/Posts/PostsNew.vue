<template>
  <div class="posts-new">
    <h1>post create page</h1>
    <div>title: <input v-model="postTitle" /></div>
    <div>
      content:
      <textarea v-model="postText" id="" cols="30" rows="10"></textarea>
    </div>
    <button v-on:click="apiPost()">submit</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      postTitle: null,
      postText: null,
      message: "Welcome to a post",
      post: [],
    };
  },
  created: function() {},
  methods: {
    apiPost: function() {
      var formData = new FormData();
      formData.append("title", this.postTitle);
      formData.append("text", this.postText);
      if (this.postImage) {
        formData.append("image", this.postImage);
      }
      axios
        .post("/api/posts", formData)
        .then((response) => {
          this.$router.push(`/posts/${response.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
