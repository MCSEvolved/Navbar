import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteSVG } from "rollup-plugin-svelte-svg";

// https://vitejs.dev/config/
export default defineConfig({
  root: './packages/demo/',
  resolve: {
    dedupe: ['svelte']
  },
  build: {
    outDir: '../../dist/demo',
    emptyOutDir: true
  },
  plugins: [
    svelte({
      exclude: /\.wc\.svelte$/ as any,
      hot: false
    }),
    svelte({
      include: /\.wc\.svelte$/ as any,
      hot: false,
      compilerOptions: {
        customElement: true
      },
      onwarn: (warning, handler) => {
        const { code, frame } = warning;
        // if (code === "css-unused-selector")
        //   return;

        handler(warning);
      },

    }),
    svelteSVG({
      svgo:{},
      enforce: "pre",
    })
  ]
});
