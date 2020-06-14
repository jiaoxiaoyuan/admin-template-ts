<template>
  <div class="top">
    <el-row>
      <el-col :xs="10" :sm="12" :md="14" :lg="16" :xl="18">
        <div class="top-left">
          <i class="fa fa-reorder Collapse" @click="Collapse"></i>
          <el-breadcrumb class="breadcrumb" separator="/">
            <template v-for="item in levelList">
              <el-breadcrumb-item :key="item.path"> {{ item.meta.title }}</el-breadcrumb-item>
            </template>
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
      levelList: [], // 路由集合
    };
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val);
      },
      deep: true,
    },
    $route() {
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
      let matched = this.$route.matched.filter((item) => item.name);
      const first = matched[0];
      // if (first && first.name.trim().toLocaleLowerCase() !== "Dashboard".toLocaleLowerCase()) {
      //   matched = [{ path: "/dashboard", meta: { title: "dashboard" } }].concat(matched);
      // }
      this.levelList = matched;
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
  }
}
</style>
