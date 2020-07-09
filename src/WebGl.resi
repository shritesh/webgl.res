open Js.Typed_array

type canvasT
type glT

type clearMaskT = [ #ColorBuffer ]

type drawModeT = [ #Triangles ]

type vertexShaderT
type fragmentShaderT
type programT

type bufferT

type targetT = [ #ArrayBuffer ]
type usageT = [ #StaticDraw ]

type attribLocationT

type dataTypeT = [ #Float ]

let canvas: option<canvasT>
let width: canvasT => int
let height: canvasT => int

let getContext: canvasT => option<glT>
let viewport: (glT, ~x: int, ~y: int, ~width: int, ~height: int) => unit
let clearColor: (glT, ~r: float, ~g: float, ~b: float, ~a: float) => unit

let clear: (glT, clearMaskT) => unit

let drawArrays: (glT, drawModeT, ~offset: int, ~count: int) => unit

let makeVertexShader: (glT, string) => option<vertexShaderT>
let makeFragmentShader: (glT, string) => option<fragmentShaderT>

let makeProgram: (glT, vertexShaderT, fragmentShaderT) => option<programT>
let useProgram: (glT, programT) => unit

let createBuffer: glT => option<bufferT>
let bindBuffer: (glT, targetT, bufferT) => unit
let bufferData: (glT, targetT, ArrayBuffer.t, usageT) => unit

let getAttribLocation: (glT, programT, string) => option<attribLocationT>
let vertexAttribPointer: (glT, attribLocationT, ~size: int, ~dataType: dataTypeT, ~normalized: bool, ~stride: int, ~offset: int) => unit
let enableVertexAttribArray: (glT, attribLocationT) => unit