require('./wasm_exec')

globalThis._go = new Go();
globalThis._go.argv = [];
globalThis._go.env = [];
globalThis._go.exit = () => console.log('EXIT CALLED');
module.exports = globalThis._go.importObject.gojs;
