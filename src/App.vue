<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark navbar-custom">
      <ul>
        <li
          v-for="(children, parent) in menu"
          :key="parent"
          class="parent-item"
        >
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
    </nav>
  </div>
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

<style > .navbar-custom {
  background-color: #f8f8f8;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 20px;
}
.navbar-custom .navbar-brand {
  color: #777;
}
.navbar-custom .navbar-brand:hover,
.navbar-custom .navbar-brand:focus {
  color: #5e5e5e;
}
.navbar-custom .navbar-nav > li > a {
  color: #777;
}
.navbar-custom .navbar-nav > li > a:hover,
.navbar-custom .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-custom .navbar-nav > .active > a,
.navbar-custom .navbar-nav > .active > a:hover,
.navbar-custom .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-custom .navbar-nav > .open > a,
.navbar-custom .navbar-nav > .open > a:hover,
.navbar-custom .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-custom .navbar-nav > .dropdown > a:hover .caret {
  border-top-color: #777;
  border-bottom-color: #777;
}
.navbar-custom .navbar-nav > .dropdown > a .caret {
  border-top-color: #555;
  border-bottom-color: #555;
}
.navbar-custom .navbar-nav .open .dropdown-menu {
  background-color: #e7e7e7;
  border-radius: 0;
  border: none;
  box-shadow: none;
  margin-top: 2px;
  width: auto;
}
.navbar-custom .navbar-nav .open .dropdown-menu > li > a {
  color: #777;
  padding: 5px 15px;
}
.navbar-custom .navbar-nav .open .dropdown-menu > li > a:hover,
.navbar-custom .navbar-nav .open .dropdown-menu > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-custom .navbar-nav .open .dropdown-menu > .active > a,
.navbar-custom .navbar-nav .open .dropdown-menu > .active > a:hover,
.navbar-custom .navbar-nav .open .dropdown-menu > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
</style>
