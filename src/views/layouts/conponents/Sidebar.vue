<template>
  <div class="Sidebar">
    <div class="logo">
      <img
        :class="[isCollapse ? 'isTrue' : 'isImg']"
        src="../../../assets/login_images/logo.png"
        :alt="title"
      />
    </div>
    <el-scrollbar class="el-scrollbar">
      <el-menu
        :default-active="$router.currentRoute.path"
        router
        background-color="#001529"
        text-color="#fff"
        :collapse="isCollapse"
        class="el-menu-slide"
      >
        <template v-for="item in RoutersData">
          <el-menu-item
            v-if="item.children.length == 1"
            :key="item.name"
            :index="item.children[0].path"
          >
            <i v-if="item.children[0].meta.icon" :class="item.children[0].meta.icon"></i>
            <span slot="title">{{ item.children[0].meta.title }}</span>
          </el-menu-item>

          <el-submenu v-else :key="item.name" :index="item.children[0].path">
            <template slot="title">
              <i v-if="item.meta.icon" :class="item.meta.icon"></i>
              <span v-if="item.meta && item.meta.title" slot="title">{{ item.meta.title }}</span>
            </template>
            <el-menu-item v-for="child in item.children" :key="child.name" :index="child.path">
              <i v-if="child.meta.icon" :class="child.meta.icon"></i>
              <span v-if="child.meta && child.meta.title" slot="title">{{ child.meta.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
      getRouters: this.$store.state.routers,
    };
  },
  computed: {
    RoutersData() {
      return this.getRouters.filter(
        (item) => item.hidden && item.children && item.children.length > 0
      );
    },
    isCollapse() {
      return this.$store.state.IsCollapse;
    },
  },
  watch: {
    isCollapse(val) {
      console.log(val);
    },
  },
  mounted() {
    console.log("getRouters", this.$store.state.routers);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.Sidebar {
  height: 100vh;
  overflow: hidden;
  background: #001529;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: all 0.2s ease-in-out;
  padding: 0;
  .logo {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    .isImg {
      display: block;
      width: 98px;
      height: 40px;
    }
    .isTrue {
      width: 45px;
      height: 50%;
    }
  }
  .el-scrollbar {
    height: 100%;
    background: #001529;
    .el-menu {
      border-right: solid 1px #001529;
    }
    .el-menu-slide {
      border-right: none;
      i {
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
      }
    }
    .el-menu-slide {
      border-right: none;
      i {
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
        // color: #fff !important;
      }
    }
    ::v-deep {
      .el-submenu__title i {
        color: #ffffff !important;
      }
    }
  }
}
</style>
