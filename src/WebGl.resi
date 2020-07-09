open Js.Typed_array

type canvasT
type glT

type vertexShaderT
type fragmentShaderT
type programT

type bufferT

type targetT = [ #ArrayBuffer ]
type usageT = [ #StaticDraw ]

let canvas: option<canvasT>
let width: canvasT => int
let height: canvasT => int

let getContext: canvasT => option<glT>
let viewport: (glT, ~x: int, ~y: int, ~width: int, ~height: int) => unit
let clearColor: (glT, ~r: float, ~g: float, ~b: float, ~a: float) => unit

let makeVertexShader: (glT, string) => option<vertexShaderT>
let makeFragmentShader: (glT, string) => option<fragmentShaderT>

let makeProgram: (glT, vertexShaderT, fragmentShaderT) => option<programT>
let useProgram: (glT, programT) => unit

let createBuffer: glT => option<bufferT>
let bindBuffer: (glT, targetT, bufferT) => unit
let bufferData: (glT, targetT, ArrayBuffer.t, usageT) => unit