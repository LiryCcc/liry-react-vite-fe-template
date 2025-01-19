import { Config } from 'tailwindcss';
const tailwindConfig: Config = {
  content: ['./src/**/*.tsx', './index.html', './rsbuild-index.html'],
  theme: {
    extend: {}
  },
  plugins: []
};

export default tailwindConfig;
