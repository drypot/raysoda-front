//import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: 'src/client/main.ts',
  output: {
    file: 'public/build/bundle.js',
    format: 'iife',
    name: 'app',
  },
  watch: {
    include: [
      "src/client/**/*.ts"
    ]
  },
  plugins: [
    typescript({
      //include: "src/ts/**/*.ts",
      cacheDir: 'tmp/rollup-tscache',
    }),
    //resolve(),
  ]
})
