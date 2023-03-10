<template>
  <nav>
    <ul>
      <li v-for="(children, parent) in menu" :key="parent">
        {{ parent }}
        <ul>
          <li v-for="child in children" :key="child">
            {{ child }}
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    const router = require("./router").default;
    const menu = router.menu;
    console.log(menu); // console log the menu constant to check if it's being imported correctly
    return {
      menu,
    };
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
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
