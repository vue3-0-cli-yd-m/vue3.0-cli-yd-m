import { createApp } from 'vue';
import { Button, Toast } from 'vant';

import 'lib-flexible/flexible';// 解决自动转rem后vant组件变小的问题
import { router, setupRouter } from './router';
import setupRouterGuard from './router/guard';
import setupYoungDanStorage from '@/utils/cache';
import { setupStore } from '@/store';
import App from './App.vue';
import './assets/scss/_index.scss'
async function immediately(): Promise<void> {
  const app = createApp(App);
  setupYoungDanStorage();
  app.use(Button).use(Toast);
  // Configure store
  setupStore(app);
  // Configure routing
  setupRouter(app);
  // router-guard
  setupRouterGuard(router);
  // wait router ready
  await router.isReady();
  app.mount('#app');
}

immediately();
