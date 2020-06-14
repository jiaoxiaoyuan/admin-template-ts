<template>
  <el-container class="content">
    <!-- 左侧菜单 -->
    <el-aside :style="{ width: [isCollapse ? '64px' : '150px'] }">
      <slot name="left"></slot>
    </el-aside>
    <!-- 右侧页面 -->
    <el-main>
      <!-- 面包屑 -->
      <div class="top">
        <slot name="Header"></slot>
      </div>
      <!-- 页面内容 -->
      <div class="content">
        <slot name="content"></slot>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isCollapse() {
      return this.$store.state.IsCollapse;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-main {
  margin: 0;
  padding: 0;
}
</style>
