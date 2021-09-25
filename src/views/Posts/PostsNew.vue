<template>
  <div class="posts-new">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 input-group input-group-lg">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="postTitle"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2"></div>
      <text-editor ref="editorChild" />
    </div>
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="box shadow-sm border rounded bg-white mb-3 col-sm-8">
        Attachments
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile" />
          <label class="custom-file-label" for="customFile">Choose file</label>
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
    </div>
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <button v-on:click="apiPost()" type="button" class="btn btn-secondary">
          submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TextEditor from "../../components/TextEditor";

export default {
  components: { TextEditor },
  data: function() {
    return {
      postTitle: null,
      postText: null,
      post: [],
      //HARDCODED TRANSLATION OF BOARD TITLE TO ID
      boardIdLookup: {
        biology: 1,
        chemistry: 2,
        physics: 3,
        computer_science: 4,
        mathematics: 5,
        statistics: 6,
        biochemistry: 7,
        geology: 8,
        thermodynamics: 9,
        cell_biology: 10,
        epidemiology: 11,
      },
      //EVENTUALLY FIX THIS
    };
  },
  created: function() {},
  methods: {
    apiPost: function() {
      var formData = new FormData();
      formData.append("title", this.postTitle);
      formData.append("text", this.$refs["editorChild"].content);
      formData.append(
        "board_id",
        this.boardIdLookup[this.$route.params.boardTitle.toLowerCase()]
      );
      if (this.postImage) {
        formData.append("image", this.postImage);
      }
      axios
        .post("/api/posts", formData)
        .then((response) => {
          this.$router.push(
            `/boards/${this.$route.params.boardTitle}/posts/${response.data.id}`
          );
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
