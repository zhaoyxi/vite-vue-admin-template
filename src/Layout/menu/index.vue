<template>
  <a-menu :selectedKeys="selectedKeys" theme="dark" mode="inline">
    <a-menu-item :key="item.path" v-for="item in routes">
      <router-link :to="item.path">
        <span>{{ item.name }}</span>
      </router-link>

      <!-- <a-menu-item
        v-for="sonItem in item.children"
        :key="sonItem.name || sonItem.fullPath"
      >
        <router-link :to="sonItem.path">
          <span>{{ sonItem.name }}</span>
        </router-link>
      </a-menu-item> -->
    </a-menu-item>
  </a-menu>
</template>

<script setup>
const props = defineProps({
  selectedKeys: Array,
  routes: Array,
});
console.log("props", props.routes);
</script>
