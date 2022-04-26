<template>
  <!-- ontouchstart 解决ios上点击按钮没有阴影反馈的问题 -->
  <div class="main" ontouchstart>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component
          :is="Component"
          v-if="$route.meta.keepAlive"
          :key="$route.name"
        />
      </keep-alive>
      <component
        :is="Component"
        v-if="!$route.meta.keepAlive"
        :key="$route.name"
      />
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
