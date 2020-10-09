## About

This template demonstrates the minimum code and tooling necessary for a frontend web app with simple deployable artifacts consisting of one HTML file, one JavaScript file, and one WebAssembly file, using [`Yew`](https://github.com/yewstack/yew), [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen), and [`wasm-pack`](https://github.com/rustwasm/wasm-pack).

Note: [`yew-wasm-pack-template`](https://github.com/yewstack/yew-wasm-pack-template) is the full-featured counterpart to this template, integrating many common web technologies.

## Usage

### 1) Install `Rust`, `wasm-pack`, `miniserve`, `cargo-generate`, and `node/npm`

  * Rust: `https://rustup.rs`
  * wasm-pack: `cargo install wasm-pack`
  * miniserve: `cargo +nightly install miniserve`
  * cargo-generate `cargo install cargo-generate`
  * node/npm: `https://nodejs.org/`

### 2) Generate New Project

  * Use `cargo generate --git https://github.com/j4ng5y/yew-wasm-pack-minimal` to generate your new project.

### 3) Install the node dependencies

  * Once in your new repository, run `npm install`, this will install rollup and the associated plugins.

### 4) Run

  * Simply run `rollup -c` to run the dev-mode application.

### 5) Deploy

  * Access your generated build artifacts, `bundle.js` and `yew_wasm_pack_minimal_bg.wasm`, in ./pkg from your project's root directory.
