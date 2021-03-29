<template>
  <button v-on:click="count++">you clicked me {{ count }} times!</button>
</template>

<style></style>

<script>
export default {
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
