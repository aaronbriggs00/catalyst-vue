<template>
  <div class="col-md-4">
    <div class="border network-item rounded mb-3">
      <div class="p-3 d-flex align-items-center network-item-header">
        <div class="dropdown-list-image mr-3">
          <img class="rounded-circle" src="img/p1.png" alt="" />
        </div>
        <div class="font-weight-bold">
          <h6 class="font-weight-bold text-dark mb-0">
            {{ board.title }}
          </h6>
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 border-top border-bottom network-item-body"
      >
        <span class="font-weight-bold small text-primary"
          >{{ board.post_count }} posts</span
        >
      </div>
      <div class="network-item-footer py-3 d-flex text-center">
        <div class="col-6 pl-3 pr-1">
          <router-link :to="`/boards/${board.title.toLowerCase()}`"
            ><button type="button" class="btn btn-primary btn-sm btn-block">
              Read
            </button></router-link
          >
        </div>
        <div class="col-6 pr-3 pl-1">
          <button
            v-if="!board.subscribed && !subscribed"
            v-on:click="subscribe(board.id)"
            type="button"
            class="btn btn-outline-primary btn-sm btn-block"
          >
            <i class="feather-user-plus"></i> subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  props: ["board"],
  data: function() {
    return {
      message: "I'm from a component",
      count: 0,
      subscribed: false,
    };
  },
  created: function() {},
  methods: {
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
