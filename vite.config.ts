import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx';
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig({
  cssCodeSplit: true,
  plugins: [vue(), vueJsx(), visualizer({ open: true }), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    commonjsOptions: {
      strictRequires: [
        new RegExp('@fortawesome\/[\\w]+-[\\w]+-svg-icons\/fa[\\w]+\.js')
      ]
    }
  }


});
