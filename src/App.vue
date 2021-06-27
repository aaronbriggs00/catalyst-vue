<template>
  <div id="app">
    <NavBar
      v-bind:isLoggedIn="isLoggedIn()"
      v-bind:UserId="getUserId()"
      v-bind:UserName="getUserName()"
      v-bind:UserImage="getUserImage()"
    />
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
    getUserName: function() {
      return String(localStorage.getItem("user_name"));
    },
    getUserImage: function() {
      return String(localStorage.getItem("user_image"));
    },
  },
};
</script>
