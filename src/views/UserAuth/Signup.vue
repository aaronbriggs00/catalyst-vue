<template>
  <div class="signup">
    <h1>Signup Form</h1>
    <h3 v-if="errors">{{ errors }}</h3>
    email: <input v-model="email" /> name: <input v-model="name" /> password:
    <input v-model="password" type="password" /> password confirmation:
    <input v-model="password_confirmation" type="password" />
    <button v-on:click="signUp()">submit</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: null,
      password: null,
      password_confirmation: null,
      errors: null,
    };
  },
  created: function() {},
  methods: {
    signUp: function() {
      var params = {
        email: this.email,
        name: this.name,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<style></style>
