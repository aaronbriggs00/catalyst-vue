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
        physiology: 3,
        geology: 4,
        physics: 5,
        mathematics: 6,
        statistics: 7,
      },
      //EVENTUALLY FIX THIS
    };
  },
  created: function() {},
  methods: {
    //delete this
    testButton: function() {
      console.log(
        this.boardIdLookup[this.$route.params.boardTitle.toLowerCase()]
      );
    },
    //delete this
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
