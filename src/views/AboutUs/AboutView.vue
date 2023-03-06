<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
// import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
// import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/bg9.jpg";

//dep
import Typed from "typed.js";

//sections
import Information from "./Sections/AboutInformation.vue";
import AboutTeam from "./Sections/AboutTeam.vue";
import Featuring from "./Sections/AboutFeaturing.vue";
import Newsletter from "./Sections/AboutNewsletter.vue";

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
              Section J Reports: <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h2>What is it?</h2>
              <h2>Our Experience</h2>
              <h2>What's the point?</h2>
              <h2>How does it work?</h2>
              <h2>What are the requirements?</h2>
              <h2>What's the cost?</h2>
              <h2>How long does it take?</h2>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Section J reports help us build more than glorified tents in
              commerical applicatons. They help us build better, safer, more
              efficient buildings.
            </p>
            <button type="submit" class="btn bg-white text-dark">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <Information />
    <AboutTeam />
    <Featuring />
    <Newsletter />
    <AboutTeam />
    <Information />
  </div>
  <DefaultFooter />
</template>
