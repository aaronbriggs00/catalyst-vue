<template>
  <div class="signup">
    <div class="bg-white">
      <div class="container">
        <div
          class="row justify-content-center align-items-center d-flex vh-100"
        >
          <div class="col-md-4 mx-auto">
            <div class="osahan-login py-4">
              <div class="text-center mb-4">
                <a href="index.html"><img src="img/logo.svg" alt=""/></a>
                <h5 class="font-weight-bold mt-3">Join Catalyst56</h5>
                <p class="text-muted">
                  Some Slogan Here
                </p>
              </div>
              <div>
                <div class="form-row">
                  <div class="col">
                    <div class="form-group">
                      <label class="mb-1">First name</label>
                      <div class="position-relative icon-form-control">
                        <i class="feather-user position-absolute"></i>
                        <input
                          v-model="first_name"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label class="mb-1">Last name</label>
                      <div class="position-relative icon-form-control">
                        <i class="feather-user position-absolute"></i>
                        <input
                          v-model="last_name"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Email</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-at-sign position-absolute"></i>
                    <input v-model="email" type="email" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Password (6 or more characters)</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-unlock position-absolute"></i>
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Please type your password again.</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-unlock position-absolute"></i>
                    <input
                      v-model="password_confirmation"
                      type="password"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1"
                    >You agree to the Olink <a href="#">User Agreement</a>,
                    <a href="#">Privacy Policy</a>, and
                    <a href="#">Cookie Policy</a>.</label
                  >
                </div>
                <span>{{ errors }}</span>
                <button
                  class="btn btn-primary btn-block text-uppercase"
                  v-on:click="signUp()"
                >
                  Agree & Join
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
                    Already on Olink?

                    <router-link to="/login"
                      ><a class="font-weight-bold">Sign in</a></router-link
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
      email: null,
      first_name: null,
      last_name: null,
      password: null,
      password_confirmation: null,
      errors: null,
    };
  },
  created: function() {},
  methods: {
    testPush: function() {
      this.$router.push("/login");
    },
    signUp: function() {
      var params = {
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
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
