<template>
  <div id="app">
    <NavBar v-bind:isLoggedIn="isLoggedIn()" />
    <router-view />
  </div>
</template>

<style></style>

<script>
import NavBar from "./components/NavBar";

export default {
  components: {
    NavBar,
  },
  data: function() {
    return {
      message: "hello",
    };
  },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function() {
      return parseInt(localStorage.getItem("user_id"));
    },
  },
};
</script>
