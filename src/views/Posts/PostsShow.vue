<template>
  <div class="posts-show">
    <h1>{{ post.title }}</h1>
    <h3>{{ post.text }}</h3>
    <h1>~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~</h1>
    <div>
      <Child
        v-for="child in post.children"
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
  data: function() {
    return {
      postDataLoaded: false,
      post: [],
      testArray: [1, 2, 3, 4, 5],
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
  },
};
</script>
