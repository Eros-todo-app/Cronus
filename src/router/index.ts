import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import pageNotExist from "@/views/404.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    name: "Page not found",
    component: pageNotExist
  },
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
