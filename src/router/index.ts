import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/signUp",
      name: "signUp",
      component: () => import("@/components/sign-up/SignUp.vue")
    },
    {
      path: "/signUp/accountType",
      name: "accountType",
      component: () => import("@/views/sign-up/AccountTypeView.vue")
    },
    {
      path: "/signUp/identifyUser",
      name: "identifyUser",
      component: () => import("@/views/sign-up/IdentifyUserView.vue")
    }
  ]
});

export default router;
