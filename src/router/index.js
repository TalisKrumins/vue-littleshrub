import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import SectionJ from "../views/SectionJ/SectionJ.vue";
import Content from "../views/Content.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/section-j",
    name: "section-j",
    component: SectionJ,
  },
  {
    path: "/content",
    name: "content",
    component: Content,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
