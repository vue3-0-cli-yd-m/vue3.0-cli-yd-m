<template>
  <div>
    <van-button type="danger">这是首页</van-button>
    <div class="ss">直接写px会自动转为rem</div>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeIndex',
  props: {},
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>
