<template>
  <Nav :menu="menu" class="nav" />
  <router-view />
</template>

<script>
import { menu } from "./router/index.js";
import Nav from "./components/Menus/Nav.vue";

export default {
  name: "App",
  data() {
    return {
      menu: menu,
    };
  },
  methods: {
    goToRoute(routeName) {
      this.$router.push({ name: routeName });
    },
  },
  components: {
    Nav,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
