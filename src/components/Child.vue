<template>
  <div>
    <div :class="`reviews-members col-sm-${11 - indentation} ml-auto`">
      <div class="media">
        <a href="#"
          ><img
            class="mr-3"
            src="https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png?itok=Vhm0RCa3"
            alt="Generic placeholder image"
        /></a>
        <div class="media-body">
          <div class="reviews-members-header">
            <h6 class="mb-1">
              <a class="text-black" href="#">{{ child.author }}</a>
              <small class="text-gray"> 2 days ago</small>
            </h6>
          </div>
          <div class="reviews-members-body">
            <p>{{ child.value }}</p>
          </div>
          <div class="reviews-members-footer d-flex align-items-center">
            <a class="total-like btn btn-outline-info btn-sm mr-1" href="#"
              ><i class="feather-thumbs-up"></i> 123</a
            >
            <a class="total-like btn btn-outline-info btn-sm" href="#"
              ><i class="feather-thumbs-down"></i> 02</a
            >
            <span class="ml-auto"
              ><button
                v-if="!showReplyDiv"
                v-on:click="showReplyDiv = true"
                class="btn btn-light btn-sm ml-1"
              >
                reply
              </button>
              <button class="btn btn-light btn-sm ml-1">report</button></span
            >
          </div>
          <div v-if="showReplyDiv" class="form-members-body mt-2">
            <textarea
              v-model="value"
              rows="4"
              placeholder="Add a public comment..."
              class="form-control"
            ></textarea>
          </div>
          <div
            v-if="showReplyDiv"
            class="reviews-members-footer d-flex align-items-center mt-1"
          >
            <span class="ml-auto"
              ><button
                v-on:click="
                  reply();
                  showReplyDiv = false;
                "
                class="btn btn-light btn-sm ml-1"
              >
                submit
              </button>
              <button
                v-on:click="showReplyDiv = false"
                class="btn btn-light btn-sm ml-1"
              >
                cancel
              </button></span
            >
          </div>
        </div>
      </div>
    </div>

    <p v-if="editing">{{ child }}</p>
    <child
      v-if="!updatePerformed"
      v-for="child in child.children"
      v-bind:child="child"
      v-bind:key="child.id"
      v-bind:indentation="indentation + 1"
    ></child>
    <child
      v-if="updatePerformed"
      v-for="child in arrayAfterReply"
      v-bind:child="child"
      v-bind:key="child.id"
      v-bind:indentation="indentation + 1"
    ></child>
  </div>
</template>

<style>
#replyIndentationPlaceHolder {
  text-align: left;
}
</style>

<script>
import axios from "axios";

export default {
  props: ["child", "indentation"],
  name: "child",
  computed: {
    arrayAfterReply: function() {
      if (this.newReply) {
        return this.child.children.concat({
          id: this.newReply.id,
          value: this.newReply.value,
          parent_id: this.newReply.id,
          post_id: this.newReply.post_id,
          created_at: this.newReply.created_at,
          updated_at: this.newReply.updated_at,
          children: [],
        });
      } else {
        return this.child.children;
      }
    },
  },
  data: function() {
    return {
      message: "I'm from a component",
      updatePerformed: false,
      newReply: null,
      value: null,
      count: 0,
      editing: false,
      showReplyDiv: false,
    };
  },
  created: function() {},
  methods: {
    toggleReplyDiv: function() {
      this.showReplyDiv = !this.showReplyDiv;
    },
    reply: function(id, data) {
      var formData = new FormData();
      formData.append("value", this.value);
      formData.append("parent_id", this.child.id);
      formData.append("post_id", this.child.post_id);
      console.log(formData);
      axios
        .post(`/api/comments`, formData)
        .then((response) => {
          this.newReply = response.data;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
      this.updatePerformed = true;
      this.value = null;
    },
    edit: function() {
      this.editing = !this.editing;
    },
  },
};
</script>
