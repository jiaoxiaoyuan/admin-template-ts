import Vue from "vue";
import Vuex from "vuex";
import { asyncRouterMap } from "../router/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userinfo: JSON.parse(localStorage.getItem("userinfo")),
    routers: asyncRouterMap,
    IsCollapse: false,
  },
  mutations: {
    SAVE_USERINFO(state, userinfo) {
      // 先把数据存入本地存储
      localStorage.setItem("userinfo", JSON.stringify(userinfo));
      // 在更新数据
      state.userinfo = userinfo;
    },
    Is_Collapse(state, status) {
      state.IsCollapse = status;
    },
  },
  getters: {},
  actions: {},
});
