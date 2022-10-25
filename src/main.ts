import { createApp } from 'vue'
import "@styles/global.scss"
import { createRouter, createWebHistory } from "vue-router"
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";
import App from './App.vue'

const app = createApp(App);

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "set-active",
});

app.use(router).mount("#app");
