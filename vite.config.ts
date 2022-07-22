import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
import styleImport from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: './', // 打包基础路径 不配置打包后可能会找不到资源
  server: {
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/test': {
        target: '', // 测试服务
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/test/, ''),
      },

      '/online': {
        target: '', // 线上服务
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/online/, ''),
      },
    },
    port: 8888, // 启动时的默认占用端口
  },
});
