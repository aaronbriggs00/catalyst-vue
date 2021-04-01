<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="col-md-11 ml-auto">
      <div class="box shadow-sm border rounded bg-white mb-3">
        <div class="box-title border-bottom p-3">
          <h6 class="m-0">40 Reviews</h6>
        </div>
        <div class="box-body p-3">
          <div id="retro-comments">
            <div class="reviews-members pt-0">
              <div class="media">
                <a href="#"
                  ><img
                    class="mr-3"
                    src="img/p4.png"
                    alt="Generic placeholder image"
                /></a>
                <div class="media-body">
                  <div class="form-members-body">
                    <textarea
                      rows="1"
                      placeholder="Add a public comment..."
                      class="form-control"
                    ></textarea>
                  </div>
                  <div
                    class="form-members-footer d-flex align-items-center mt-2"
                  >
                    <b>12,725 Comments</b>
                    <span class="ml-auto"
                      ><button class="btn btn-light btn-sm" type="button">
                        CANCEL
                      </button>
                      <button class="btn btn-primary btn-sm" type="button">
                        COMMENT
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="reviews-members">
              <div class="media">
                <a href="#"
                  ><img
                    alt="Generic placeholder image"
                    src="img/p2.png"
                    class="mr-3"
                /></a>
                <div class="media-body">
                  <div class="reviews-members-header">
                    <h6 class="mb-1">
                      <a href="#" class="text-black">Gurdeep Osahan </a>
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
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function() {},
  methods: {},
};
</script>
