<template>
  <div class="py-5 shadow-sm border rounded bg-white mb-3 col-sm-8">
    <quill-editor
      style="height: 33vh"
      ref="myQuillEditor"
      v-model="content"
      :options="editorOptions"
    />
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  name: "textEditor",
  components: {
    quillEditor,
  },
  data: function() {
    return {
      content: "",
      editorOptions: {
        placeholder: "compose an epic...",
        theme: "snow",
      },
    };
  },
  created: function() {},
  methods: {},
};
</script>

<style></style>
