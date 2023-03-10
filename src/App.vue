<template>
  <nav-bar>
    <ul>
      <li v-for="(children, parent) in menu" :key="parent" class="parent-item">
        <span class="parent-link">{{ parent }}</span>
        <ul>
          <li v-for="child in children" :key="child.name">
            <router-link :to="child.path" class="child-link">{{
              child.name
            }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav-bar>
  <router-view />
</template>

<script>
import { menu } from "./router/index.js";

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

<style > .nav-bar {
  background-color: #f8f8f8;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 20px;
}
.nav-bar .navbar-brand {
  color: #777;
}
.nav-bar .navbar-brand:hover,
.nav-bar .navbar-brand:focus {
  color: #5e5e5e;
}
.nav-bar .navbar-nav > li > a {
  color: #777;
}
.nav-bar .navbar-nav > li > a:hover,
.nav-bar .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.nav-bar .navbar-nav > .active > a,
.nav-bar .navbar-nav > .active > a:hover,
.nav-bar .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.nav-bar .navbar-nav > .open > a,
.nav-bar .navbar-nav > .open > a:hover,
.nav-bar .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.nav-bar .navbar-nav > .dropdown > a:hover .caret {
  border-top-color: #777;
  border-bottom-color: #777;
}
.nav-bar .navbar-nav > .dropdown > a .caret {
  border-top-color: #555;
  border-bottom-color: #555;
}
.nav-bar .navbar-nav .open .dropdown-menu {
  background-color: #e7e7e7;
  border-radius: 0;
  border: none;
  box-shadow: none;
  margin-top: 2px;
  width: auto;
}
.nav-bar .navbar-nav .open .dropdown-menu > li > a {
  color: #777;
  padding: 5px 15px;
}
.nav-bar .navbar-nav .open .dropdown-menu > li > a:hover,
.nav-bar .navbar-nav .open .dropdown-menu > li > a:focus {
  color: #333;
  background-color: transparent;
}
.nav-bar .navbar-nav .open .dropdown-menu > .active > a,
.nav-bar .navbar-nav .open .dropdown-menu > .active > a:hover,
.nav-bar .navbar-nav .open .dropdown-menu > .active > a:focus {
  color: #555;
}
</style>
