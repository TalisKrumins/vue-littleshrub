<script setup>
// example component
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>
<template>
  <section class="pt-4 pb-6" id="count-stats">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-3">
          <DefaultCounterCard
            title="Projects"
            description="And counting, accross all industries"
            :count="300"
            suffix="+"
            :duration="3000"
          />
        </div>
        <div class="col-md-3">
          <DefaultCounterCard
            title="Reviews"
            description="As reviewed on Google"
            :count="5"
            suffix=" Star"
            :duration="3000"
          />
        </div>
        <div class="col-md-3">
          <DefaultCounterCard
            title="Satified Customers"
            description="Always putting our customers first"
            :count="100"
            suffix="%"
            :duration="4000"
          />
        </div>
      </div>
    </div>
  </section>
</template>
