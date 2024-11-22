# Golang
## WASM

```bash
> cp ../../wasm/parser.wasm .
```

> [parser.wasm](./parser.wasm): WASM file compiled by go.

## Run on browser

![](https://i.imgur.com/wKYZH28.png)

```bash
> npm run start
```

* [index.html](./index.html): browser using WASM template, run!
* [wasm_exec.js](./wasm_exec.js): core code to run WASM in browser. `cp $(go env GOROOT)/misc/wasm/wasm_exec.js wasm_exec.js`

## Run on Node.js

```bash
> node index.mjs
```

![](https://i.imgur.com/mLm3Z5I.png)

* [index.mjs](./index.mjs): Nodejs using WASM template
* [go_wasm_exec_node.js](./go_wasm_exec_node.js): core code to run WASM in Nodejs.
