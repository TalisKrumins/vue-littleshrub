<script setup>
// example components
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
import LoginCard from "../../../examples/cards/blogCards/LoginCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="title"><h2>Our Sectors</h2></div>
        <br />
        <div class="col-lg-6">
          <div class="centered row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="Residential"
              title="7 Star Energy Rating, NatHERs, BASIX and Part H6 Reports"
              description="We cater for all type of residential projects, from small to large scale developments. We can scope works to suit all needs and budgets."
            />
            <DefaultInfoCard
              color="info"
              icon="Commerical"
              title="Section J Reports and JV3's"
              description="We work on all projects large and small throughout the commercial sector. From small portables to airports, we've got you covered."
            />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="Technical Services"
              title="Software to Technical Publications"
              description="We assist manufactueres develop POS material from software applications to technical publications such as user manuals and installation guides."
            />
            <DefaultInfoCard
              color="info"
              icon="Government"
              title="Every State and Terriotry"
              description="We understand the high expectations of government and the need to deliver on time and on budget. We have a proven track record of delivering on time and on budget."
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <LoginCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Customer Login"
            description="We have speciatiy tools to help our customers streamline their day to day. Click below to login to our customer portal."
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 4rem;
  margin-top: 0;
}

.centered {
  text-align: center;
}
</style>
