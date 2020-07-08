open Belt
open Js.Typed_array

let canvas = WebGl.canvas->Option.getExn
let gl = canvas->WebGl.getContext->Option.getExn

let vertexShader = gl->WebGl.createVertexShader(`
attribute vec4 vPosition;
void main() {
    gl_Position = vPosition;
}`)->Option.getExn

let fragmentShader = gl->WebGl.createFragmentShader(`
precision mediump float;
void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`)->Option.getExn

let program = gl->WebGl.createProgram(vertexShader, fragmentShader)->Option.getExn

gl->WebGl.useProgram(program)

let vertices = Float32Array.make([-1.0, -1.0, 0.0, 1.0, 1.0, -1.0])