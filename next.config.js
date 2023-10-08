/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/modules/core/styles')],
  },
  webpack: (config) => {
    return {
      ...config,
      module: {
        rules: [
          { test: /\/index.ts/, sideEffects: false },
          ...config.module.rules,
        ],
      },
    };
  },
};

module.exports = nextConfig;
