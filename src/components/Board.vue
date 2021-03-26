<template>
  <div>
    <router-link :to="`/boards/${board.title}`">{{ board.title }}</router-link>
    <p>posts: {{ board.post_count }}</p>
  </div>
</template>

<style></style>

<script>
export default {
  props: ["board"],
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
