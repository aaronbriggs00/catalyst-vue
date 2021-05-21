<template>
  <div class="p-3 d-flex align-items-center osahan-post-header">
    <button
      v-if="voteCast != -1"
      v-on:click="vote(-1, post.id)"
      type="button"
      class="btn btn-dark btn-sm rounded"
    >
      <i class="feather-chevrons-down"></i>
    </button>
    <i v-if="voteCast == -1" class="feather-chevrons-down"></i>
    <span>{{ postScore }}</span>
    <i v-if="voteCast == 1" class="feather-chevrons-up"></i>
    <button
      v-if="voteCast != 1"
      v-on:click="vote(1, post.id)"
      type="button"
      class="btn btn-light btn-sm rounded"
    >
      <i class="feather-chevrons-up"></i>
    </button>
    <div class="dropdown-list-image ml-1 mr-3">
      <img class="rounded-circle" src="img/p3.png" alt="" />
    </div>
    <div class="font-weight-bold mr-3">
      <div>
        <router-link
          :to="`/boards/${boardTitleLookup[post.board_id]}/posts/${post.id}`"
        >
          <span class="font-weight-normal">{{ post.title }}</span>
        </router-link>
        <router-link :to="`/users/${post.user_id}`">
          <div class="small text-success">
            <i class="feather-user mr-1"></i>
            by {{ post.author }}
          </div>
        </router-link>
      </div>
    </div>
    <span class="ml-auto mb-auto">
      <div class="btn-group">
        <router-link :to="`/boards/${boardTitleLookup[post.board_id]}`">
          <span>to /{{ boardTitleLookup[post.board_id] }}</span>
        </router-link>
        <div class="dropdown-menu dropdown-menu-right">
          <button class="dropdown-item" type="button">
            <i class="feather-trash"></i> Delete
          </button>
          <button class="dropdown-item" type="button">
            <i class="feather-x-circle"></i> {{ post.board_id }}
          </button>
        </div>
      </div>
      <br />
      <div class="text-right text-muted pt-1">{{ post.created_at }}</div>
    </span>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  props: ["post"],
  data: function() {
    return {
      message: "I'm from a component",
      count: 0,
      postScore: this.post.score,
      voteCast: 0,
      //HARDCODED TRANSLATION OF BOARD TITLE TO ID
      boardTitleLookup: {
        1: "biology",
        2: "chemistry",
        3: "physics",
        4: "computer science",
        5: "mathematics",
        6: "statistics",
        7: "biochemistry",
        8: "geology",
        9: "thermodynamics",
        10: "cell biology",
        11: "epidemiology",
      },
      //FIX THIS EVENTUALLY
    };
  },
  created: function() {},
  methods: {
    vote: function(value, id) {
      var params = {
        post_id: id,
        value: value,
      };
      axios
        .post("/api/votes", params)
        .then((response) => {
          if (this.voteCast != 0) {
            this.postScore += 2 * value;
          } else {
            this.postScore += value;
          }
          this.voteCast = value;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
