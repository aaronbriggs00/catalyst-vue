<template>
  <div>
    <span
      >{{ indentation }}{{ child.value }} created at:
      {{ child.created_at }}</span
    >
    <input type="text" v-model="value" />
    <button v-on:click="reply()">reply</button>
    <child
      v-for="child in child.children"
      v-bind:child="child"
      v-bind:key="child.id"
      v-bind:indentation="indentation + 1"
    ></child>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  props: ["child", "indentation"],
  name: "child",
  data: function() {
    return {
      message: "I'm from a component",
      value: null,
      count: 0,
    };
  },
  created: function() {},
  methods: {
    reply: function(id, data) {
      var formData = new FormData();
      formData.append("value", this.value);
      formData.append("parent_id", this.child.id);
      formData.append("post_id", this.child.post_id);
      console.log(formData);
      axios
        .post(`/api/comments`, formData)
        .then((response) => {
          console.log(response);
          this.$router.push(`/posts/${response.data.post_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
