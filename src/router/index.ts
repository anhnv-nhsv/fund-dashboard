import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";
import { translate } from "@/core/helpers/i18n-translate";
import JwtService from "@/core/services/JwtService";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/apps/fund-certificates",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      // FUND START
      {
        path: "/apps/fund-certificates",
        name: "apps-fund-management",
        component: () => import("@/views/apps/fund/FundMgmt.vue"),
        meta: {
          pageTitle: "fund",
          breadcrumbs: ["apps", "fund"],
        },
      },

      {
        path: "/apps/fund-certificate/",
        name: "fund-certificates-detail",
        component: () => import("@/views/apps/fund/FundDetails.vue"),
        meta: {
          pageTitle: "Fund Details",
          breadcrumbs: ["apps", "Fund Details"],
        },
      },
      // FUND END

      // FUND INFOR START
      {
        path: "/apps/fund-information",
        name: "apps-fund-information",
        component: () => import("@/views/apps/fund-infor/FundInformation.vue"),
        meta: {
          pageTitle: "fundInformation",
          breadcrumbs: ["apps", "fundInformation"],
        },
      },

      {
        path: "/apps/fund-infor/",
        name: "fund-infor-detail",
        component: () => import("@/views/apps/fund-infor/FundInforDetails.vue"),
        meta: {
          pageTitle: "Fund Details",
          breadcrumbs: ["apps", "Fund Details"],
        },
      },
      // FUND INFOR END

      // FUND DECLARATION START
      {
        path: "/apps/fund-declaration",
        name: "apps-declaration-management",
        component: () =>
          import("@/views/apps/fund-declaration/FundDeclaration.vue"),
        meta: {
          pageTitle: "fundDeclaration",
          breadcrumbs: ["apps", "fundDeclaration"],
        },
      },
      // FUND DECLARATION END

      // FUND CERTIFICATE BALANCE START
      {
        path: "/apps/fund-balance",
        name: "apps-fund-balance",
        component: () =>
          import("@/views/apps/fund-certificate-balance/FundBalance.vue"),
        meta: {
          pageTitle: "fundBalance",
          breadcrumbs: ["apps", "fundBalance"],
        },
      },
      // FUND CERTIFICATE BALANCE END
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
        meta: {
          pageTitle: "Sign In",
        },
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
        meta: {
          pageTitle: "Sign Up",
        },
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
        meta: {
          pageTitle: "Password reset",
        },
      },
    ],
  },
  {
    path: "/multi-step-sign-up",
    name: "multi-step-sign-up",
    component: () =>
      import("@/views/crafted/authentication/MultiStepSignUp.vue"),
    meta: {
      pageTitle: "Multi-step Sign up",
    },
  },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${translate(to.meta.pageTitle)} - ${
    import.meta.env.VITE_APP_NAME
  }`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  authStore.verifyAuth();

  // before page access check if page requires authentication
  // next();
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router;
