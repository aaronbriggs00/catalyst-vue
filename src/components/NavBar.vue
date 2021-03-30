<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/boards">Boards</router-link> |
    <router-link v-if="!$parent.isLoggedIn()" to="/login">Login</router-link> |
    <router-link v-if="!$parent.isLoggedIn()" to="/signup">Signup</router-link>
    |
    <router-link v-if="$parent.isLoggedIn()" to="/logout">Logout</router-link>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {};
  },
  created: function() {},
  methods: {},
};
</script>
