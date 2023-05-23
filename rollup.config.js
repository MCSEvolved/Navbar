import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import svgr from '@svgr/rollup'

import React from 'react';
import ReactIs from 'react-is';
import ReactDOM from 'react-dom';

import pkg from "./package.json" assert {type: 'json'};

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        'react-is': Object.keys(ReactIs),
        'react': Object.keys(React),
        'react-dom': Object.keys(ReactDOM),
        '@apollo/client': ['ApolloProvider', 'ApolloClient', 'HttpLink', 'InMemoryCache', 'useQuery', 'gql'],
        'styled-components': [ 'styled', 'css', 'ThemeProvider' ]
    }
    }),
    svgr()
  ]
};