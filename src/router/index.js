import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import SectionJ from "../views/SectionJ/SectionJ.vue";
import JV3 from "../views/JV3/JV3.vue";
import { createMenuObject } from "./routerUtils.js";

const routes = [
  {
    path: "/",
    name: "Home",
    parent: [],
    component: HomeView,
  },
  {
    path: "/section-j",
    name: "Section J",
    parent: ["Services"],
    component: SectionJ,
  },
  {
    path: "/jv3",
    name: "JV3",
    parent: ["Services"],
    component: JV3,
  },
  {
    path: "/about",
    name: "About",
    parent: ["Information"],
    component: JV3,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export const menu = createMenuObject(routes);
console.log(menu);

export default router;
