<template>
  <div id="replyIndentationPlaceHolder">
    <div :class="`col-md-${12 - indentation} ml-auto`">
      <div class="box shadow-sm border rounded bg-white mb-1">
        <div class="box-body p-3">
          <div id="retro-comments">
            <div class="reviews-members">
              <div class="media">
                <a href="#"
                  ><img
                    alt="Generic placeholder image"
                    src="https://bondprinting.com/wp-content/uploads/2019/03/placeholder-face-big-300x300.png"
                    class="mr-3"
                /></a>
                <div class="media-body">
                  <div class="reviews-members-header">
                    <h6 class="mb-1">
                      <a href="#" class="text-black">{{ child.user_id }} </a>
                      <small class="text-gray">2 months ago</small>
                    </h6>
                  </div>
                  <div class="reviews-members-body">
                    <p>
                      Was here impromptu in their first week, reacthe last
                      order. Even though they had Chefs in their open kitchen
                      they weren’t flexible to dish out few more items.
                    </p>
                  </div>
                  <div class="reviews-members-footer d-flex align-items-center">
                    <a
                      href="#"
                      class="total-like btn btn-outline-info btn-sm mr-1"
                      ><i class="feather-thumbs-up"></i> 123</a
                    >
                    <a href="#" class="total-like btn btn-outline-info btn-sm"
                      ><i class="feather-thumbs-down"></i> 02</a
                    >
                    <span class="total-like-user-main ml-2" dir="rtl">
                      <div class="overlap-rounded-circle">
                        <img
                          class="rounded-circle shadow-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          src="img/p13.png"
                          alt=""
                          data-original-title="Sophia Lee"
                        />
                        <img
                          class="rounded-circle shadow-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          src="img/p1.png"
                          alt=""
                          data-original-title="John Doe"
                        />
                        <img
                          class="rounded-circle shadow-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          src="img/p3.png"
                          alt=""
                          data-original-title="Robert Cook"
                        />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span <!--
      >{{ "-------".repeat(indentation) }} {{ child.value }} created at:
      {{ child.created_at }}</span
    >
    <input type="text" v-model="value" />
    <button v-on:click="reply()">reply</button>
    <button v-on:click="edit()">edit</button> -->
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
