import { createRouter, createWebHistory, RouterView } from "vue-router";
import IntroductionView from "../views/IntroductionView.vue";
import ServicesView from "../views/ServicesView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ContactView from "../views/ContactView.vue";
import i18n from "../i18n";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    {
      path: "/:locale?", // <--- 2
      component: RouterView,
      redirect: { name: "introduction" },
      beforeEnter: (to, from, next) => {
        const lang = to.params.locale;
        if (!["fr", "en"].includes(lang)) {
          i18n.locale = "en";
          return next("/" + "en");
        }
        i18n.locale = lang;
        return next();
      },

      children: [
        // <--- 4
        {
          path: "introduction",
          name: "introduction",
          component: IntroductionView,
        },
        {
          path: "services",
          name: "services",
          component: ServicesView,
        },
        {
          path: "portfolio",
          name: "portfolio",
          component: PortfolioView,
        },
        {
          path: "contact",
          name: "contact",
          component: ContactView,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.params.locale) return next("/" + i18n.locale + to.path);
  next();
});
export default router;
