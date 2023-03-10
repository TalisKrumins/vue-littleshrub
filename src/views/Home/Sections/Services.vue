<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import sj from "@/assets/img/pages/section_j.jpg";
import jv3 from "@/assets/img/pages/jv3.jpg";
import nathers from "@/assets/img/pages/natherslogo_0.png";
import questions from "@/assets/img/pages/more_questions.jpg";
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">Our Services</h3>
          <p class="text-white opacity-8 mb-0">
            Learn more about our services and how we can help you.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="sj"
            :profile="{ name: 'Section J Reports', link: 'section-j' }"
            :position="{ label: 'Commercial', color: 'success' }"
            description="We offer Section J Report services in Australia to help commercial building owners and designers demonstrate their compliance with the minimum energy efficiency standards set by the Building Code of Australia, ensuring that their building projects are environmentally sustainable and cost-effective in the long term."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="jv3"
            :profile="{ name: 'JV3 Assessments', link: 'jv3' }"
            :position="{ label: 'Commercial', color: 'success' }"
            description="As a service, a JV3 report is a performance solution to a Section J Report in Australia, which utilises computer modelling to demonstrate compliance with the National Construction Code (NCC) energy efficiency standards for commercial building projects.<br><br>"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="nathers"
            :profile="{ name: 'NatHERS Assesments', link: 'nathers' }"
            :position="{ label: 'Residential', color: 'success' }"
            description="As a service, a NatHERS assessment is a rating system used in Australia to assess the energy efficiency of residential building designs, helping to reduce greenhouse gas emissions and promote sustainable housing design."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="questions"
            :profile="{ name: 'Informative Section', link: 'javascript:;' }"
            :position="{ label: 'General', color: 'success' }"
            description="Here you will find informaiton on frequently asks questions as well as giving a more in depth look at the services we offer."
          />
        </div>
      </div>
    </div>
  </section>
</template>
