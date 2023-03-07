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
import bg0 from "@/assets/img/city-profile.jpg";

//sections
import Information from "./Sections/Content.vue";

import MaterialButton from "@/components/MaterialButton.vue";

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
            <h1 class="text-white mb-4">Material Kit</h1>
            <p class="text-white opacity-8 lead pe-5 me-5">
              The time is now for it be okay to be great. People in this world
              shun people for being nice.
            </p>
            <div class="buttons">
              <MaterialButton color="white" class="mt-4"
                >Get Started</MaterialButton
              >
              <MaterialButton color="none" class="text-white shadow-none mt-4"
                >Read more</MaterialButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="card card-body shadow-xl mx-3 mx-md-8 mt-n6">
    <Information />
  </div>
  <DefaultFooter />
</template>
<style>
.left {
  left: 0;
  text-align: left;
}

.no-padding {
  padding: 0 !important;
}
</style>
