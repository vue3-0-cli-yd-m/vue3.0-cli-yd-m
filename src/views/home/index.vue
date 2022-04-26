<template>
  <div class="warp">
    <van-button type="danger" @click="handleClick">这是首页</van-button>
    <div class="t">移动端适配解决方案PX自动转为REM</div>

    <div class="t">
      <span>已经封装了全局的本地缓存方法</span>
    </div>

    <div class="t">
      <span>全局读取</span>
      <span class="b" @click="readStorage">youngDanStorage</span>
      <span>使用</span>
    </div>

    <div class="t">
      <span>vite配置官网，可按照需求自行配置</span>
    </div>

    <div class="t">
      <span class="b" @click="toVant">https://vitejs.dev/config</span>
    </div>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeIndex',
  props: {},
  components: {},
  setup() {
    const handleClick = () => {
      alert('嘻嘻嘻嘻嘻')
    }

    const readStorage = () => {
      youngDanStorage.set('name', 'kiKo_yd')
      alert(youngDanStorage.get('name'))
    }

    const toVant = () => {
      window.open('https://vitejs.dev/config')
    }

    return {
      toVant,
      readStorage,
      handleClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.warp {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.t {
  margin-top: 20px;
  font-size: 28px;
}
.b {
  color: blue;
}
</style>
