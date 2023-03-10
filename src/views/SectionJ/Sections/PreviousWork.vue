<script setup>
// Vue Material Kit 2 components
import RotatingCard from "@/examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "@/examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "@/examples/cards/rotatingCards/RotatingCardBack.vue";

import cakeByKate from "@/assets/img/prev-work/cake_by_kate.jpg";
import grevillea from "@/assets/img/prev-work/golding_street.jpg";
import tumut from "@/assets/img/prev-work/tummet.jpg";
import semaphore from "@/assets/img/prev-work/charles_st.jpg";
</script>
<template>
  <section class="card bg-gradient-dark py-0">
    <div class="container mb-5">
      <div class="row22">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">Previous Works</h3>
          <p class="text-white opacity-8 mb-0">
            A small snapshot of some of our previous works.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col22">
          <RotatingCard>
            <RotatingCardFront
              :image="cakeByKate"
              title="Cake By Kate"
              description="Section J Report"
            />

            <RotatingCardBack
              image=""
              title=""
              description="Small retail store within a larger shopping complex"
            />
          </RotatingCard>
        </div>
        <div class="col22">
          <RotatingCard>
            <RotatingCardFront
              :image="grevillea"
              title="Grevillea Waters"
              description="Section J Report"
            />

            <RotatingCardBack
              image=""
              title=""
              description="A retirement villiage main building"
            />
          </RotatingCard>
        </div>
        <div class="col22">
          <RotatingCard>
            <RotatingCardFront
              :image="tumut"
              title="Tumut River Brewing Co"
              description="Section J Report"
            />

            <RotatingCardBack
              image=""
              title=""
              description="A new brewery in the heart of Tumut"
            />
          </RotatingCard>
        </div>
        <div class="col22">
          <RotatingCard>
            <RotatingCardFront
              :image="semaphore"
              title="Charles St Lawson"
              description="Section J Report"
            />

            <RotatingCardBack
              image=""
              title=""
              description="Upgrade to an existing building"
            />
          </RotatingCard>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.row22 {
  display: flex; /* Use flexbox layout */
  align-items: stretch;
}

.col22 {
  flex: 1; /* Make each column take up equal space */
  width: 25%; /* Set the width of each column */
}
</style>
