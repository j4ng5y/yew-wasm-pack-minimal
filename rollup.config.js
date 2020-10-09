import {wasm} from '@rollup/plugin-wasm';

export default {
    input: './main.js',
    output: {
        file: './pkg/bundle.js',
        format: 'iife',
    },
    plugins: [
        wasm(),
    ],
};