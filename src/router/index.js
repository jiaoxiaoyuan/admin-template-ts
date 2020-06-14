import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/layouts";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export const asyncRouterMap = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: false,
    meta: { title: "系统登录" },
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/401"),
    hidden: false,
    meta: { title: "401" },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404"),
    hidden: false,
    meta: { title: "404" },
  },
  {
    path: "*",
    redirect: "/404",
    hidden: false,
  },
  {
    path: "/",
    component: Layout,
    name: "home",
    hidden: true,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/home"),
        meta: {
          title: "首页",
          icon: "el-icon-menu",
        },
      },
    ],
  },
  {
    path: "/IndustrialPark",
    component: Layout,
    redirect: "/IndustrialPark",
    name: "Park",
    hidden: true,
    children: [
      {
        path: "/IndustrialPark",
        name: "ParkIndex",
        component: () => import("../views/Park/index.vue"),
        meta: {
          title: "园区信息",
          icon: "el-icon-heavy-rain",
        },
      },
    ],
  },
  {
    path: "/ElectricPage",
    component: Layout,
    redirect: "/ElectricPage",
    name: "Electric",
    hidden: true,
    children: [
      {
        path: "/ElectricPage",
        name: "ElectriIndex",
        component: () => import("../views/Electric/index.vue"),
        meta: {
          title: "用电统计",
          icon: "el-icon-cpu",
        },
      },
    ],
  },
  {
    path: "/WaterPage",
    component: Layout,
    redirect: "/WaterPage",
    name: "Water",
    hidden: true,
    children: [
      {
        path: "/WaterPage",
        name: "WaterIndex",
        component: () => import("../views/Water/index.vue"),
        meta: {
          title: "用水统计",
          icon: "el-icon-heavy-rain",
        },
      },
    ],
  },
  {
    path: "/CoolPage",
    component: Layout,
    redirect: "/CoolPage",
    name: "Cool",
    hidden: true,
    children: [
      {
        path: "/CoolPage",
        name: "CoolIndex",
        component: () => import("../views/Cool/index.vue"),
        meta: {
          title: "制冷统计",
          icon: "el-icon-loading",
        },
      },
    ],
  },
  // 系统管理
  {
    path: "/systemPage",
    component: Layout,
    redirect: "/systemPage/tree",
    name: "tree",
    hidden: true,
    meta: { title: "系统管理", icon: "el-icon-setting" },
    children: [
      {
        path: "/systemPage/tree",
        name: "tree",
        component: () => import("../views/system/tree.vue"),
        meta: {
          icon: "el-icon-connection",
          title: "节点管理",
        },
      },
      {
        path: "/systemPage/device",
        name: "device",
        component: () => import("../views/system/device.vue"),
        meta: {
          icon: "el-icon-printer",
          title: "设备管理",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: asyncRouterMap,
});
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.tsToken ? true : false;
  // 权限判断
  if (to.path == "/login" || to.path == "/password") {
    next();
  } else {
    isLogin ? next() : next("login");
  }
});
export default router;
