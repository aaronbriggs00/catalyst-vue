<template>
  <div class="posts-show">
    <h1>{{ post.title }}</h1>
    <h3>{{ post.text }}</h3>
    <h1>~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~</h1>
    <textarea v-model="value" cols="60" rows="10"></textarea>
    <button v-on:click="reply()">reply</button>
    <div>
      <Child
        v-for="child in arrayAfterReply.children"
        v-bind:child="child"
        v-bind:indentation="0"
        v-bind:key="child.id"
      />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Child from "../../components/Child";

export default {
  components: {
    Child,
  },
  computed: {
    arrayAfterReply: function() {
      return this.post;
    },
  },
  data: function() {
    return {
      postDataLoaded: false,
      post: [],
      value: "",
      newReply: [],
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
        this.postDataLoaded = true;
      });
    },
    reply: function() {
      var formData = new FormData();
      formData.append("value", this.value);
      formData.append("post_id", this.$route.params.id);
      axios
        .post(`/api/comments`, formData)
        .then((response) => {
          this.newReply = response.data;
          this.post.children.push({
            id: this.newReply.id,
            value: this.newReply.value,
            parent_id: this.newReply.id,
            post_id: this.newReply.post_id,
            created_at: this.newReply.created_at,
            updated_at: this.newReply.updated_at,
            children: [],
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
