<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <!-- <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item :key="item.path" v-for="item in routes">
          <router-link :to="item.path">
            <span>{{ item.name }}</span>
          </router-link>
        </a-menu-item>
      </a-menu> -->
      <MenuIndex v-model:selectedKeys="selectedKeys" v-model:routes="routes" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content class="m-4">
        <!-- <a-breadcrumb class="my-16px">
          <a-breadcrumb-item>
            {{ router.currentRoute.value.meta.name }}
          </a-breadcrumb-item>
        </a-breadcrumb> -->
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { routes, router } from "@/router";
import MenuIndex from "./menu/index.vue";
export default defineComponent({
  name: "Layout",
  components: {
    MenuIndex,
  },
  setup() {
    console.log("useRoute", router.currentRoute);
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(["1"]),
      routes,
      router,
    };
  },
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
