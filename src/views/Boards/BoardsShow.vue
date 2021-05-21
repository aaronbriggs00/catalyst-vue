<template>
  <div class="boards-show">
    <div class="py-4">
      <div class="container">
        <div class="row">
          <!-- Main Content -->
          <main
            class="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12"
          >
            <div class="box shadow-sm border rounded bg-white mb-3">
              <div class="box-title p-3 d-flex align-items-top">
                <h6 class="m-0">Recent</h6>
                <h6 class="ml-1">Hot</h6>
                <h6 class="ml-1">Top</h6>
                <h6 class="ml-1">Popular</h6>
              </div>
              <div class="box-body p-0"></div>
            </div>
            <div class="box shadow-sm border rounded bg-white mb-3">
              <div class="box-body p-0">
                <Post
                  v-for="post in posts"
                  v-bind:post="post"
                  v-bind:key="post.id"
                />
              </div>
            </div>
          </main>
          <aside
            class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12"
          >
            <button
              v-if="!subscribed && !board.subscribed"
              v-on:click="subscribe()"
              type="button"
              class="btn btn-lg btn-block btn-primary mb-3"
            >
              <i class="feather-bell"></i> subscribe
            </button>
            <span v-if="subscribed || board.subscribed"
              >you are subscribed to this board.</span
            >
            <div
              id="board information"
              class="box shadow-sm border rounded bg-white mb-3"
            >
              <div
                class="box mb-3 shadow-sm border rounded bg-white profile-box text-center"
              >
                <div class="p-5">
                  <img
                    src="https://cdn.lynda.com/course/503930/503930-637491093027405232-16x9.jpg"
                    class="img-fluid"
                    alt="Responsive image"
                  />
                </div>
                <div class="p-3 border-top border-bottom">
                  <h6 class="font-weight-bold text-dark mb-1 mt-0">Overview</h6>
                  <p class="mb-0 text-muted">
                    This space will be used for representing information
                    relating to the board such as rules, guidelines, a brief
                    overview, etc.
                  </p>
                </div>
                <div class="p-3">
                  <div class="d-flex align-items-top mb-2">
                    <p class="mb-0 text-dark font-weight-bold">
                      Post Subscribers
                    </p>
                    <p class="font-weight-bold text-info mb-0 mt-0 ml-auto">
                      358
                    </p>
                  </div>
                  <div class="d-flex align-items-top">
                    <p class="mb-0 text-dark font-weight-bold">
                      Board Subscribers
                    </p>
                    <p class="font-weight-bold text-info mb-0 mt-0 ml-auto">
                      191,895
                    </p>
                  </div>
                </div>
                <div class="p-3">
                  <div class="d-flex align-items-top mb-2">
                    <router-link
                      :to="`/boards/${this.$route.params.boardTitle}/posts/new`"
                    >
                      <button
                        type="button"
                        class="btn btn-lg btn-block btn-light mb-3"
                      >
                        <i class="feather-plus-square"></i> create new post
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Post from "../../components/Post";

export default {
  components: {
    Post,
  },
  data: function() {
    return {
      board: [],
      posts: [],
      subscribed: false,
    };
  },
  created: function() {
    this.apiCall();
  },
  methods: {
    apiCall: function() {
      axios
        .get(`/api/boards/${this.$route.params.boardTitle}`)
        .then((response) => {
          console.log(response.data);
          this.board = response.data;
          this.posts = this.board.posts;
        });
    },
    subscribe: function(id) {
      var params = {
        board_id: id,
      };
      axios
        .post("/api/subscriptions", params)
        .then((response) => {})
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
      this.subscribed = true;
    },
  },
};
</script>
