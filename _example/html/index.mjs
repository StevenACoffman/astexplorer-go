import fs from "fs";

import Go from './go_wasm_exec_node.js'

const go = new Go();
const buf = fs.readFileSync('./parser.wasm');
const wasm = await WebAssembly.instantiate(new Uint8Array(buf), go.importObject);
go.run(wasm.instance)
const codeToParse = `// from https://go.dev/doc/tutorial/generics
package main

// SumIntsOrFloats sums the values of map m. It supports both int64 and float64
// as types for map values.
func SumIntsOrFloats[K comparable, V int64 | float64](m map[K]V) V {
	var s V
	for _, v := range m {
		s += v
	}
	return s
}
`
function parseFile (code) {
  return JSON.parse(globalThis['__GO_PARSE_FILE__'](code))
}

console.log( 'parseFile res:', parseFile(codeToParse) ) // 47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad
