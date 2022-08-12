import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home/index.vue";
import About from "../views/About/index.vue";
import SonPages from "../views/SonPage/index.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    name: "home",
    // redirect: "/son",
    // meta: { title: "home" },
    children: [
      {
        path: "son",
        components: SonPages,
        name: "sonpages",
        // meta: { title: "sonpages" },
      },
    ],
  },
  {
    path: "/about",
    component: About,
    name: "about",
    // meta: { title: "about" },
    children: [
      {
        path: "son",
        components: SonPages,
        name: "sonpages",
        // meta: { title: "sonpages" },
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
