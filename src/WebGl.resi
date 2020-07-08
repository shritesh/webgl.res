type canvasT
type glT

type vertexShaderT
type fragmentShaderT
type programT

let canvas: option<canvasT>
let width: canvasT => int
let height: canvasT => int

let getContext: canvasT => option<glT>
let viewport: (glT, ~x: int, ~y: int, ~width: int, ~height: int) => unit

let makeVertexShader: (glT, string) => option<vertexShaderT>
let makeFragmentShader: (glT, string) => option<fragmentShaderT>

let makeProgram: (glT, vertexShaderT, fragmentShaderT) => option<programT>
let useProgram: (glT, programT) => unit