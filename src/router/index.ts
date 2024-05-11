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
      path: "/signUp/identifyUser/:accountType",
      name: "identifyUser",
      component: () => import("@/views/sign-up/IdentifyUserView.vue")
    },
    {
      path: "/signUp/contactInformation/:accountType",
      name: "contactInformation",
      component: () => import("@/views/sign-up/ContactInformationView.vue")
    },
    {
      path: "/signUp/success/:accountType",
      name: "success",
      component: () => import("@/views/sign-up/SuccessView.vue")
    },
    {
      path: "/signUp/emailCheck",
      name: "emailCheck",
      component: () => import("@/views/sign-up/CheckYourEmailView.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue")
    }
  ]
});

export default router;
