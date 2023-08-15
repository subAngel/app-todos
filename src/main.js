import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { router } from "./routes";

createApp(App).use(router).mount("#app");
