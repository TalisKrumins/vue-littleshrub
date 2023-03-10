<template>
  <Carousel>
    <RotatingCard v-for="item in previousWorkItems" :key="item.id">
      <RotatingCardFront
        :image="item.image"
        icon="touch_app"
        :title="item.title"
        :description="item.description"
      />

      <RotatingCardBack
        :image="item.image"
        :title="item.title"
        :description="item.description"
        :action="[
          {
            route: item.route,
            label: 'View Project',
          },
        ]"
      />
    </RotatingCard>
  </Carousel>
</template>

<script setup>
// Vue Material Kit 2 components
import RotatingCard from "@/examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "@/examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "@/examples/cards/rotatingCards/RotatingCardBack.vue";
import Carousel from "@/layouts/sections/Carousel.vue";
// import image from "@/assets/img/team-4.jpg";
</script>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PreviousWorkCarousel",
  components: {
    Carousel,
    RotatingCard,
  },
  data() {
    return {
      previousWorkItems: [
        {
          id: 1,
          image: "https://bit.ly/32ZoTGx",
          title: "Project 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          route: "/project1",
        },
        {
          id: 2,
          image: "https://bit.ly/3ck5Y5U",
          title: "Project 2",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          route: "/project2",
        },
        {
          id: 3,
          image: "https://bit.ly/3qfjqTw",
          title: "Project 3",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          route: "/project3",
        },
      ],
    };
  },
});
</script>
