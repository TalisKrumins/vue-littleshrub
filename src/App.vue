<template>
  <nav>
    <ul>
      <li v-for="(children, parent) in menu" :key="parent">
        {{ parent }}
        <ul>
          <li v-for="child in children" :key="child" @click="goToRoute(child)">
            {{ child }}
          </li>
        </ul>
      </li>
    </ul>
  </nav>
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

nav {
  padding: 30px;
  background-color: #000;
  color: #fff;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

nav li {
  margin-right: 20px;
  font-size: 16px;
}

nav a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

nav a:hover {
  color: #999;
}

nav ul ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #222;
  min-width: 200px;
}

nav ul ul li {
  display: block;
  margin: 0;
  font-size: 14px;
  padding: 10px;
}

nav ul ul li:hover {
  background-color: #333;
}

nav ul li:hover > ul {
  display: block;
}
nav ul li {
  position: relative;
}

nav ul li ul {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  list-style: none;
  padding-left: 0;
}

nav ul li:hover > ul {
  display: block;
}

nav ul li ul li {
  width: 100%;
}

nav ul li ul li a {
  display: block;
  padding: 10px;
  background-color: #f8f8f8;
  color: #333;
  text-decoration: none;
}

nav ul li ul li a:hover {
  background-color: #e8e8e8;
}
</style>
