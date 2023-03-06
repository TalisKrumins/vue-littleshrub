import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";

createApp(App).use(router).mount("#app");

App.use(createPinia());
App.use(router);
App.use(materialKit);
App.mount("#app");
