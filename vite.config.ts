// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {ConfigEnv, defineConfig, loadEnv} from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({mode}: ConfigEnv) => {
  const env = {...process.env, ...loadEnv(mode, process.cwd())};

  const version = env.npm_package_version;
  const BUILD_DATE = Date.now();
  const APP_NAME = env.npm_package_name;

  return {
    define: {
      _VERSION: `"${version}"`,
      _BUILD_DATE: `"${BUILD_DATE}"`,
      _SYSTEM: `"${APP_NAME}"`,
      _UNIQUE_STATE: env.DEV ? '"development"' : `"${version}_${BUILD_DATE}"`,
    },
    plugins: [react()],
    server: {
      port: +env.PORT || +env.VITE_PORT || 3000,
      proxy: env.VITE_API_URL ? {
        '/rest': {
          target: env.VITE_API_URL || '',
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace('/rest', ''),
        },
      } : {}
    },
    build: {
      outDir: './build',
      minify: true,
      reportCompressedSize: true,
    },
    esbuild: {
      jsxInject: "import React from 'react'",
    },
  };
});
