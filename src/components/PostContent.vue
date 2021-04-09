<template>
  <div class="row">
    <div class="col-sm-1"></div>
    <div class="col-sm-8 box shadow-sm border rounded bg-white mb-3 ml-1">
      <div class="box-title border-bottom p-3">
        <h6 class="m-0">Careers at Google</h6>
      </div>
      <div class="box-body p-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          lobortis ornare tortor, in hendrerit augue egestas in. Integer
          ultricies tortor non dictum porttitor. Cras purus lorem, interdum vel
          est eget, scelerisque convallis odio. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Proin a tortor quis est facilisis
          aliquet quis eu odio. Morbi mi elit, ullamcorper eu ullamcorper vitae,
          pulvinar quis nisl. Curabitur vitae vulputate turpis, eu molestie est.
          Morbi ac sapien imperdiet, efficitur diam eu, vulputate dolor.
          Pellentesque quis ex vel purus finibus pharetra. Vivamus gravida
          commodo ante, at mollis ante molestie et. Ut ac augue tempus sapien
          mollis blandit eu eget mi. Ut ullamcorper ac purus at volutpat. Nullam
          non enim sit amet tellus auctor maximus et at est. Donec in est
          hendrerit quam iaculis sagittis nec et sapien. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Mauris sit amet dolor quam.
          Nam efficitur ex vitae urna dapibus hendrerit. Fusce non luctus mi.
          Quisque dapibus mauris vel turpis pulvinar, non mollis felis
          vulputate. Nam pharetra ut lectus ac scelerisque. Donec sed dignissim
          metus, quis imperdiet ante. Vivamus ut leo egestas, sollicitudin neque
          eu, rutrum erat. Pellentesque aliquet, mauris vitae gravida consequat,
          tortor orci sagittis orci, eget fringilla sem turpis et ipsum.
          Phasellus maximus massa in purus ornare, sed hendrerit est feugiat. In
          a auctor odio. Maecenas eget molestie ipsum, nec elementum nibh.
          Integer congue justo tortor, sed placerat elit commodo non. Aenean
          lobortis purus at hendrerit posuere. Maecenas at diam nibh. In
          convallis, libero nec dapibus placerat, est elit rhoncus orci, quis
          molestie purus dolor nec felis. Quisque id turpis eu nibh aliquet
          eleifend. Nulla et nulla gravida, dignissim arcu egestas, malesuada
          tellus. Mauris vitae justo et libero pretium viverra non id massa. In
          ut erat in mi mattis varius. Integer consectetur, velit nec varius
          interdum, nisl ligula tincidunt ipsum, non iaculis velit nisl nec
          tellus. Praesent eu urna elementum sem tempus ullamcorper sed eget
          elit. Etiam lacinia nibh tempus tortor tincidunt elementum. Vestibulum
          sollicitudin interdum feugiat. Vestibulum eget metus lectus. Maecenas
          euismod vehicula ante, non venenatis metus convallis vitae. Proin et
          purus non diam condimentum rutrum. Quisque viverra et magna at
          vehicula. Aenean dui libero, viverra quis tincidunt vitae, commodo in
          neque. Proin mollis quis mi a aliquet. Maecenas quis enim elit. Sed
          non purus nunc. Curabitur in quam quis diam commodo commodo vel sit
          amet ex. Aliquam semper rutrum rhoncus. In cursus libero arcu, sit
          amet laoreet massa pulvinar id. Cras nec vehicula leo, vel fringilla
          dui. Aliquam ullamcorper pulvinar dolor, nec eleifend tellus venenatis
          quis. Aliquam erat volutpat. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Quisque sapien
          eros, lobortis vel ligula vel, fringilla ultrices mi. Aenean elementum
          mauris nec metus viverra maximus. Nulla quis mi justo. Quisque
          venenatis fermentum felis vitae tincidunt. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Proin ut condimentum eros, id
          sagittis quam. Aliquam erat volutpat. Nulla sagittis mauris magna, ac
          venenatis felis hendrerit lobortis.
        </p>
        <p class="mb-0"></p>
      </div>
    </div>
    <div
      class="col-sm-2 box mb-3 shadow-sm border rounded bg-white profile-box text-center ml-2"
    >
      <div class="py-4 px-3 border-bottom">
        <img
          src="https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png?itok=Vhm0RCa3"
          class="mt-2 rounded-circle"
          alt="Responsive image"
        />
        <h5 class="font-weight-bold text-dark mb-1 mt-4">{{ post.author }}</h5>
        <p class="mb-0 text-muted">Author Position Placeholder</p>
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
        <span
          >bio text bio text bio text bio text bio text bio text bio text bio
          text bio text bio text bio text bio text bio text bio text bio text
          bio text bio text bio text
        </span>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  props: ["post"],
  data: function() {
    return {
      message: "I'm from a component",
      count: 0,
    };
  },
  created: function() {},
  methods: {},
};
</script>
