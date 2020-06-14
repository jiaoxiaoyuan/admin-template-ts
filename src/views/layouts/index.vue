<template>
  <div class="Layui">
    <!-- 内容 -->
    <Content>
      <Sidebar slot="left"></Sidebar>
      <!-- 头部 -->
      <LayoutHeader slot="Header"></LayoutHeader>
      <!-- 视图 -->
      <router-view slot="content"></router-view>
    </Content>
  </div>
</template>

<script>
import { LayoutHeader, Content, Sidebar } from "./conponents";
export default {
  components: {
    LayoutHeader,
    Content,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
.Layout {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #f5f7f9;
}
</style>
