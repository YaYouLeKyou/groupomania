<script>
import HeaderVue from "./components/Header.vue";
import LoginVue from "./components/Login.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    LoginVue,
  },
};
</script>

<template>
  <div>
    <HeaderVue />
    <router-view></router-view>

    <h1>Welcome to Groupomania :)</h1>
  </div>
</template>

<style></style>
