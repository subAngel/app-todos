import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Toast, { POSITION} from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueCookies from 'vue-cookies'
import { router } from "./routes";

const toastOptions = {
    position: POSITION.TOP_CENTER,
    timeout:3000
}

createApp(App).use(router).use(VueCookies, { expires: '7d'}).use(Toast,toastOptions).mount("#app");
