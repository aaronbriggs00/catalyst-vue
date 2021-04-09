<template>
  <div class="posts-show">
    <PostContent v-bind:post="post" />
    <div class="row">
      <div class="col-sm-1"></div>
      <div id="board information" class="col-sm-2 ml-1">
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
              This space will be used for representing information relating to
              the board that the post currently sits in
            </p>
          </div>
          <div class="p-3">
            <div class="d-flex align-items-top mb-2">
              <p class="mb-0 text-dark font-weight-bold">Post Subscribers</p>
              <p class="font-weight-bold text-info mb-0 mt-0 ml-auto">358</p>
            </div>
            <div class="d-flex align-items-top">
              <p class="mb-0 text-dark font-weight-bold">Board Subscribers</p>
              <p class="font-weight-bold text-info mb-0 mt-0 ml-auto">
                191,895
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="comment-section" class="col-sm-8 mr-1">
        <div class="box shadow-sm border rounded bg-white mb-3">
          <div class="box-title border-bottom p-3">
            <h6 class="m-0">Comments</h6>
          </div>
          <div class="box-body p-3">
            <div id="retro-comments">
              <div class="reviews-members pt-0">
                <div class="media">
                  <a href="#"
                    ><img
                      class="mr-3"
                      src="https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png?itok=Vhm0RCa3"
                      alt="Generic placeholder image"
                  /></a>
                  <div class="media-body">
                    <div class="form-members-body">
                      <textarea
                        v-model="value"
                        rows="4"
                        placeholder="Add a public comment..."
                        class="form-control"
                      ></textarea>
                    </div>
                    <div
                      class="form-members-footer d-flex align-items-center mt-2"
                    >
                      <b>{{ replyCount }} replies</b>
                      <span class="ml-auto">
                        <button
                          v-on:click="reply()"
                          class="btn btn-primary btn-sm"
                          type="button"
                        >
                          comment
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Child
                v-for="child in arrayAfterReply.children"
                v-bind:child="child"
                v-bind:indentation="0"
                v-bind:key="child.id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Child from "../../components/Child";
import PostContent from "../../components/PostContent";

export default {
  components: {
    Child,
    PostContent,
  },
  computed: {
    arrayAfterReply: function() {
      return this.post;
    },
  },
  data: function() {
    return {
      post: [],
      value: "",
      newReply: [],
      replyCount: null,
    };
  },
  created: function() {
    this.apiCall();
  },
  methods: {
    apiCall: function() {
      axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.post = response.data;
        this.replyCount = response.data.replies;
      });
    },
    reply: function() {
      var formData = new FormData();
      formData.append("value", this.value);
      formData.append("post_id", this.$route.params.id);
      axios
        .post(`/api/comments`, formData)
        .then((response) => {
          this.newReply = response.data;
          this.post.children.push({
            id: this.newReply.id,
            value: this.newReply.value,
            parent_id: this.newReply.id,
            post_id: this.newReply.post_id,
            created_at: this.newReply.created_at,
            updated_at: this.newReply.updated_at,
            children: [],
          });
          this.replyCount += 1;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
