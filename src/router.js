import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home";
import About from "@/pages/about";
import Homes from "@/pages/homes";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "homes",
      children: [
        {
          path: "/homes",
          name: "homes",
          component: Homes
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
