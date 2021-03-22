<template>
  <div id="replyIndentationPlaceHolder">
    <span
      >{{ "-------".repeat(indentation) }} {{ child.value }} created at:
      {{ child.created_at }}</span
    >
    <input type="text" v-model="value" />
    <button v-on:click="reply()">reply</button>
    <button v-on:click="edit()">edit</button>
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
    };
  },
  created: function() {},
  methods: {
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
