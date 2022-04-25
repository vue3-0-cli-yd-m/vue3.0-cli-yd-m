<template>
  <div>
    <van-button type="danger" @click="loginAccount">登录</van-button>
    <input type="text" v-model="mobile" />
  </div>
</template>

<script  lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

import { router } from '@/router';

export default defineComponent({
  name: 'LoginIndex',
  props: {},
  components: {},
  setup() {
    const state = reactive({
      mobile: '',
    });

    const loginAccount = async () => {
      // await login({ mobile: state.mobile })
      youngDanStorage.set('token', '我是token');
      router.push({ path: '/home' });
    };

    const methods = {
      loginAccount,
    };

    return {
      ...methods,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.login_box {
  font-size: 28px;
}
</style>
