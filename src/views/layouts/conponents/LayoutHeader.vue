<template>
  <div class="top">
    <el-row>
      <el-col :xs="10" :sm="12" :md="14" :lg="16" :xl="18">
        <div class="top-left">
          <i class="fa fa-reorder Collapse" @click="Collapse"></i>

          <el-breadcrumb class="app-breadcrumb" separator="/">
            <transition-group name="breadcrumb">
              <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
                <span
                  v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
                  class="no-redirect"
                  ><i :class="item.meta.icon"></i>{{ item.meta.title }}</span
                >
                <a v-else @click.prevent="handleLink(item)"
                  ><i :class="item.meta.icon"></i>{{ item.meta.title }}</a
                >
              </el-breadcrumb-item>
            </transition-group>
          </el-breadcrumb>
        </div>
      </el-col>
      <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
        222
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IsCollapse: true,
      breadCrumbItems: [{ title: "首页", icon: "el-icon-menu" }],
      levelList: null, // 路由集合
    };
  },
  watch: {
    $route(route) {
      if (route.path.startsWith("/redirect/")) {
        return;
      }
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    Collapse() {
      this.IsCollapse = !this.IsCollapse;
      // 存储到vuex中
      this.$store.commit("Is_Collapse", this.IsCollapse);
    },

    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter((item) => item.meta && item.meta.title);
      const first = matched[0];

      if (!this.isDashboard(first)) {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }

      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === "home".toLocaleLowerCase();
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      console.log(item);

      // const { redirect, path } = item;
      // if (redirect) {
      //   this.$router.push(redirect);
      //   return;
      // }
      // this.$router.push(this.pathCompile(path));
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  line-height: 64px;
  height: 64px;
  background: #21262f;
  z-index: 997;
  box-shadow: 0 1px 4px #21262f;
  transition: all 0.2s ease-in-out;
  .el-row {
    width: 100%;
    overflow: hidden;
    color: #fff;
  }
  .top-left {
    display: flex;
    align-items: center;
    height: 64px;
    padding-left: 14px;
    .Collapse {
      font-size: 18px;
      cursor: pointer;
    }
    .breadcrumb {
      padding-left: 16px;
      ::v-deep {
        .el-breadcrumb__item:last-child .el-breadcrumb__inner {
          color: #fff;
        }
      }
    }
    .app-breadcrumb.el-breadcrumb {
      font-size: 14px;
      line-height: 50px;
      margin-left: 8px;
      display: flex;
      align-items: center;

      .no-redirect {
        color: #bfc8d8;
        cursor: text;
      }
      ::v-deep {
        .el-breadcrumb__inner {
          a {
            color: #fff;
            &:hover {
              color: #1890ff;
            }
          }
        }
      }
    }
  }
}
</style>
