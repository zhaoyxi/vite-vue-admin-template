<template>
  <a-config-provider :locale="locale">
    <Layout />
  </a-config-provider>
</template>

<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import Layout from "./Layout/index.vue";

dayjs.locale("zh-cn");
const locale = ref(zhCN);
</script>
