import {wasm} from '@rollup/plugin-wasm';
import execute from 'rollup-plugin-execute'

export default {
    input: './main.js',
    output: {
        file: './pkg/bundle.js',
        format: 'iife',
    },
    plugins: [
        execute('wasm-pack build --target web && miniserve --port 8080 --index index.html .'),
        wasm(),
    ],
};