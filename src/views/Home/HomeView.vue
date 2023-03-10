<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
// import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
// import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/vue-mk-header.jpg";

//dep
import Typed from "typed.js";

//sections
import Information from "./Sections/HomeInformation.vue";
import Services from "./Sections/Services.vue";
import Featuring from "./Sections/HomeFeaturing.vue";
import ContactUs from "../.././components/Forms/ContactUs.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 1000,
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
  <DefaultNavbar
    :action="{
      route: 'javascript:;',
      label: 'Buy Now',
      color: 'btn-white',
    }"
    transparent
  />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              LittleShrub Pty Ltd: <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h3>Powering a sustainable future</h3>
              <h3>Reducing construction cost</h3>
              <h3>Innovative energy for all</h3>
              <h3>Efficient solutions, greener world</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <Featuring />
    <Information />
    <Services />
    <ContactUs />
  </div>
  <DefaultFooter />
</template>
