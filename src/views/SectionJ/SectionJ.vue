<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
// import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
// import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

//image
// import bg0 from "@/assets/img/bg9.jpg";

//dep
import Typed from "typed.js";

//image
import bg0 from "@/assets/img/pages/jamie-mcglinchey-q19ZRZE4tGI-unsplash.jpg";

//sections
import Content from "./Sections/Content.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import SideBar from "@/components/Menus/Sidebar-Nav.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<script>
export default {
  methods: {
    scrollToElement(id) {
      console.log(id);
      const element = document.getElementById(id.originalId);
      element.scrollIntoView({ behavior: "smooth" });
      this.$emit("element-scrolled", id);
    },
  },
};
</script>

<template>
  <header>
    <div
      class="page-header min-vh-100"
      :style="{
        backgroundImage: `url(${bg0})`,
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-5"></span>
      <div class="container no-padding">
        <div class="row">
          <div
            class="col-lg-6 col-md-7 d-flex justify-content-center flex-column left"
          >
            <h1 class="text-white mb-4">Section J Reports</h1>
            <p class="text-white opacity-8 lead pe-5 me-5">
              Find out what Section J reports are and how we can help you
            </p>

            <div class="buttons">
              <MaterialButton
                @click="
                  scrollToElement({
                    originalId: 'contact',
                    modifiedId: 'Contact',
                  })
                "
                color="white"
                class="mt-4"
                >Get a Quote</MaterialButton
              >

              <MaterialButton
                @click="
                  scrollToElement({ originalId: 'start', modifiedId: 'Start' })
                "
                color="none"
                class="text-white shadow-none mt-4"
                >Read more</MaterialButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="wrapper">
    <div class="main card card-body shadow-xl mx-3 md-6 mt-n6" id="start">
      <Content />
    </div>
    <div class="sidebar mx-6 md-0">
      <SideBar :scroll-to-element="scrollToElement" ref="sidebar" />
    </div>
  </div>
</template>

<style>
.left {
  left: 0;
  text-align: left;
}

.no-padding {
  padding: 0 !important;
}

/* .sidebar { */
/* width: 15%;
  height: 50vh;

  min-height: 200px;
  overflow: auto;
  position: sticky;
  top: 20%;
  text-align: left; */
/* } */

/* .sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
} */

.sidebar {
  position: sticky;
  top: 20%;
  /* left: 0; */
  width: 200px;
  height: 100%;
  background-color: white;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  overflow: auto;
}
.clickable-text {
  display: block;
  margin-bottom: 10px;
  padding: 0px;
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;
}
.clickable-text:hover {
  background-color: #d0d0d0;
}

@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}

.main {
  width: 80%;
  height: 200vh;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
}

.main,
.sidebar {
  color: black;
  background-color: primary;
  border-radius: 10px;
  padding: 25px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
}

code,
pre {
  background-color: #ccc;
  padding: 0 3px;
  border-radius: 5px;
}

.bottom {
  justify-self: bottom;
}
</style>
