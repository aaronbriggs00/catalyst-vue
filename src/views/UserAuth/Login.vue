<template>
  <div class="login">
    <div class="bg-white">
      <div class="container">
        <div
          class="row justify-content-center align-items-center d-flex vh-100"
        >
          <div class="col-md-4 mx-auto">
            <div class="osahan-login py-4">
              <div class="text-center mb-4">
                <a href="index.html"><img src="img/logo.svg" alt=""/></a>
                <h5 class="font-weight-bold mt-3">Welcome Back</h5>
                <p class="text-muted">
                  Don't miss your next opportunity. Sign in to stay updated on
                  your professional world.
                </p>
              </div>
              <div>
                <div class="form-group">
                  <label class="mb-1">Email</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-user position-absolute"></i>
                    <input v-model="email" type="email" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Password</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-unlock position-absolute"></i>
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                  />
                  <label class="custom-control-label" for="customCheck1"
                    >Remember password</label
                  >
                </div>
                <span>{{ errors }}</span>
                <button
                  class="btn btn-primary btn-block text-uppercase"
                  v-on:click="login()"
                >
                  Sign in
                </button>
                <div class="text-center mt-3 border-bottom pb-3">
                  <p class="small text-muted">Or login with</p>
                  <div class="row">
                    <div class="col-4">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-instagram btn-block"
                      >
                        <i class="feather-instagram"></i> Instagram
                      </button>
                    </div>
                    <div class="col-4">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-linkedin btn-block"
                      >
                        <i class="feather-linkedin"></i> Linkedin
                      </button>
                    </div>
                    <div class="col-4">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-facebook btn-block"
                      >
                        <i class="feather-facebook"></i> Facebook
                      </button>
                    </div>
                  </div>
                </div>
                <div class="py-3 d-flex align-item-center">
                  <a href="forgot-password.html">Forgot password?</a>
                  <span class="ml-auto">
                    New to Olink?
                    <router-link to="/signup">
                      <a class="font-weight-bold">Join now</a></router-link
                    ></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: null,
    };
  },
  created: function() {},
  methods: {
    login: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          localStorage.setItem("user_name", response.data.user_name);
          localStorage.setItem("logged_in", true);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<style></style>
