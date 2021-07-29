import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import flow from 'rollup-plugin-flow';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  external: ['stream', 'styled-components'],
  plugins: [
    external(),
    flow(),
    json(),
    resolve({
      preferBuiltins: true
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      tsconfig: 'tsconfig.build.json',
      exclude: ['**/__tests__/**', '*.spec.ts', '*.spec.tsx', '*.stories.ts', '*.stories.tsx'],
      clean: true
    }),
    commonjs({
      ignoreGlobal: true,
      include: /\/node_modules\//,
      namedExports: {
        'node_modules/react/index.js': Object.keys(require('react')),
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
        'node_modules/react-is/index.js': Object.keys(require('react-is'))
      }
    }),
    copy({
      targets: [{ src: 'src/styles/fonts/SourceSansPro', dest: 'dist/styles/fonts' }]
    })
  ]
};
