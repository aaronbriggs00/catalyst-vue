<template>
  <div>
    <router-link :to="`/posts/${post.id}`">
      <h1>{{ post.title }}</h1>
    </router-link>
    <h4>replies: {{ post.replies }}</h4>
    <h4>submitted: {{ post.created_at }}</h4>
  </div>
</template>

<style></style>

<script>
export default {
  props: ["post"],
  data: function() {
    return {
      message: "I'm from a component",
      count: 0,
    };
  },
  created: function() {},
  methods: {},
};
</script>
