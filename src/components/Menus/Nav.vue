<template>
  <nav class="navbar navbar-expand-lg bg-transparent">
    <div class="container">
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ml-auto nav">
          <li v-for="(children, parent) in menu" :key="parent" class="nav-item">
            <span class="nav-item">{{ parent }}</span>
            <ul class="dropdown">
              <li
                v-for="child in children"
                :key="child.name"
                class="nav-link clickable-text"
              >
                <router-link :to="child.path" class="nav-link">{{
                  child.name
                }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: ["menu"],
};
</script>

<style>
.navbar-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  margin-right: 0;
  font-weight: bold;
  padding-top: 10px;
}

.navbar-nav .nav-item {
  margin-bottom: 10px;
  position: relative;
  padding-right: 40px;
}

.navbar-nav .nav-item .dropdown {
  position: absolute;
  top: 100%;
  /* left: 0; */
  z-index: 1;
  background-color: #fff;
  min-width: auto;
  padding: 0;
  display: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
  padding-bottom: 0px;
}

.navbar-nav .nav-item:hover .dropdown {
  display: block;
  padding: 0;
  transition: background-color 0.2s ease-in-out;
}

.navbar-nav .nav-item .nav-link {
  display: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  margin-right: 0px;
  border-radius: 0px;
}

.navbar-nav .nav-item:hover .nav-link {
  display: block;
  opacity: 1;
}

.clickable-text:hover {
  background-color: #d0d0d0;
}
</style>
