type canvasT
type glT

type vertexShaderT
type fragmentShaderT
type programT

let canvas: option<canvasT>
let getContext: canvasT => option<glT>

let createVertexShader: (glT, string) => option<vertexShaderT>
let createFragmentShader: (glT, string) => option<fragmentShaderT>

let createProgram: (glT, vertexShaderT, fragmentShaderT) => option<programT>
let useProgram: (glT, programT) => unit