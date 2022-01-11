import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'

const pkg = require('./package.json')

const libraryName = 'react-hooks-g2'

export default {
  input: `src/${libraryName}.tsx`,
  output: [
    { file: pkg.module, format: 'esm', sourcemap: true },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [ '@antv/g2' ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
}
