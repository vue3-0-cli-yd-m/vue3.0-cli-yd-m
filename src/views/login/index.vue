<template>
  <div class="warp">
    <van-button type="danger" @click="loginAccount">登录</van-button>

    <div class="t">路由，请求已经配置好了直接可以写相关的逻辑</div>
  </div>
</template>

<script  lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

import { router } from '@/router'

export default defineComponent({
  name: 'LoginIndex',
  props: {},
  components: {},
  setup() {
    const state = reactive({
      mobile: '',
    })

    const loginAccount = async () => {
      youngDanStorage.set('token', '我是token')
      router.push({ path: '/home' })
    }

    const methods = {
      loginAccount,
    }

    return {
      ...methods,
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
.warp {
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.t {
  margin-top: 20px;
  font-size: 28px;
}
</style>
