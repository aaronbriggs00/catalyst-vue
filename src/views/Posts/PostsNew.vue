<template>
  <div class="posts-new">
    <h1>post create page</h1>
    <div>title: <input v-model="postTitle" /></div>
    <div>
      content:
      <textarea v-model="postText" id="" cols="30" rows="10"></textarea>
    </div>
    <button v-on:click="apiPost()">submit</button>
    <button v-on:click="testButton()">test</button>
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
      //HARDCODED TRANSLATION OF BOARD TITLE TO ID
      boardIdLookup: {
        biology: 1,
        chemistry: 2,
        physics: 3,
        computer_science: 4,
        mathematics: 5,
        statistics: 6,
        biochemistry: 7,
        geology: 8,
        thermodynamics: 9,
        cell_biology: 10,
        epidemiology: 11,
      },
      //EVENTUALLY FIX THIS
    };
  },
  created: function() {},
  methods: {
    apiPost: function() {
      var formData = new FormData();
      formData.append("title", this.postTitle);
      formData.append("text", this.postText);
      formData.append(
        "board_id",
        this.boardIdLookup[this.$route.params.boardTitle.toLowerCase()]
      );
      if (this.postImage) {
        formData.append("image", this.postImage);
      }
      axios
        .post("/api/posts", formData)
        .then((response) => {
          this.$router.push(
            `/boards/${this.$route.params.boardTitle}/posts/${response.data.id}`
          );
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
