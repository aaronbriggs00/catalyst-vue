<template>
  <div class="row">
    <div class="col-sm-1"></div>
    <div
      id="post content"
      class="box shadow-sm border rounded bg-white mb-3 col-sm-8"
    >
      <div class="box-title border-bottom p-3">
        <h6 class="m-0">{{ post.title }}</h6>
      </div>
      <div class="box-body p-3">
        <quill-editor
          ref="myQuillEditor"
          v-model="post.text"
          :options="editorOptions"
          :disabled="true"
        />
      </div>
      <div class="row">
        <div class="card col-2">
          <img
            class="card-img-top"
            src="https://icons-for-free.com/iconfiles/png/512/eps+file+format+pdf+icon-1320167140815183040.png"
            alt="Card image cap"
            title=""
            style=""
          />
          <div class="card-body">
            <h5 class="card-title">file 1</h5>
            <p class="card-text"></p>
          </div>
        </div>
        <div class="card col-2">
          <img
            class="card-img-top"
            src="https://icons-for-free.com/iconfiles/png/512/eps+file+format+pdf+icon-1320167140815183040.png"
            alt="Card image cap"
            title=""
            style=""
          />
          <div class="card-body">
            <h5 class="card-title">file 2</h5>
            <p class="card-text"></p>
          </div>
        </div>
        <div class="card col-2">
          <img
            class="card-img-top"
            src="https://icons-for-free.com/iconfiles/png/512/eps+file+format+pdf+icon-1320167140815183040.png"
            alt="Card image cap"
            title=""
            style=""
          />
          <div class="card-body">
            <h5 class="card-title">file 3</h5>
            <p class="card-text"></p>
          </div>
        </div>
        <div class="card col-2">
          <img
            class="card-img-top"
            src="https://icons-for-free.com/iconfiles/png/512/excel+file+spreadsheet+table+xls+xls+icon+icon-1320167722079480642.png"
            alt="Card image cap"
            title=""
            style=""
          />
          <div class="card-body">
            <h5 class="card-title">file 4</h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-sm-2 ml-1 box shadow-sm border rounded bg-white mb-3 text-center"
    >
      <div class="py-4 px-3 border-bottom">
        <img
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png"
          class="img-fluid mt-2 rounded-circle"
          alt="Responsive image"
        />
        <h5 class="font-weight-bold text-dark mb-1 mt-4">{{ post.author }}</h5>
        <p class="mb-0 text-muted">author role</p>
      </div>
      <div class="d-flex">
        <div class="col-6 border-right p-3">
          <h6 class="font-weight-bold text-dark mb-1">358</h6>
          <p class="mb-0 text-black-50 small">Connections</p>
        </div>
        <div class="col-6 p-3">
          <h6 class="font-weight-bold text-dark mb-1">85</h6>
          <p class="mb-0 text-black-50 small">Views</p>
        </div>
      </div>
      <div class="overflow-hidden border-top">
        <router-link :to="`/users/${post.user_id}`">
          <a class="font-weight-bold p-3 d-block">
            View Profile
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  name: "postContent",
  components: {
    quillEditor,
  },
  props: ["post"],
  data: function() {
    return {
      editorOptions: {
        theme: "bubble",
        readOnly: true,
      },
    };
  },
  created: function() {},
  methods: {},
};
</script>
