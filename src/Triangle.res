open Belt
open Js.Typed_array

let canvas = WebGl.canvas->Option.getExn
let gl = canvas->WebGl.getContext->Option.getExn

gl->WebGl.viewport(~x=0, ~y=0, ~width=canvas->WebGl.width, ~height=canvas->WebGl.height)
gl->WebGl.clearColor(~r=1.0, ~g=1.0, ~b=1.0, ~a=1.0)

let vertexShader = gl->WebGl.makeVertexShader(`
attribute vec4 vPosition;
void main() {
    gl_Position = vPosition;
}`)->Option.getExn

let fragmentShader = gl->WebGl.makeFragmentShader(`
precision mediump float;
void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`)->Option.getExn

let program = gl->WebGl.makeProgram(vertexShader, fragmentShader)->Option.getExn

gl->WebGl.useProgram(program)

let vertices = Float32Array.make([-1.0, -1.0, 0.0, 1.0, 1.0, -1.0])

let buffer = gl->WebGl.createBuffer->Option.getExn
gl->WebGl.bindBuffer(#ArrayBuffer, buffer)
gl->WebGl.bufferData(#ArrayBuffer, vertices->Float32Array.buffer, #StaticDraw)

let vPosition = gl->WebGl.getAttribLocation(program, "vPosition")->Option.getExn
gl->WebGl.vertexAttribPointer(vPosition, ~size=2, ~dataType=#Float, ~normalized=false, ~stride=0, ~offset=0)
gl->WebGl.enableVertexAttribArray(vPosition)

gl->WebGl.clear(#ColorBuffer)
gl->WebGl.drawArrays(#Triangles, ~offset=0, ~count=3)