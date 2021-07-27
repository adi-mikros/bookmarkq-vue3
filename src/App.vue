<template>
  <div class="container">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="../src/assets/logo.png"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          ADI BookMarkQ
        </a>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
