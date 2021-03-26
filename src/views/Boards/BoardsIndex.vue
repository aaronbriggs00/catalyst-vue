<template>
  <div class="boards-index">
    <Board v-for="board in boards" v-bind:board="board" v-bind:key="board.id" />
  </div>
</template>

<script>
import axios from "axios";
import Board from "../../components/Board";

export default {
  components: {
    Board,
  },
  data: function() {
    return {
      message: "hello",
      boards: [],
    };
  },
  created: function() {
    this.apiCall();
  },
  methods: {
    apiCall: function() {
      axios.get("/api/boards").then((response) => {
        console.log("test");
        this.boards = response.data;
      });
    },
  },
};
</script>

<style></style>
