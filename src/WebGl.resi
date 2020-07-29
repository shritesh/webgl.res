type glT

type clearMaskT = [ | #DepthBuffer | #ColorBuffer | #DepthAndColorBuffer ]

type capabilityT = [ | #DepthTest ]

type drawModeT = [ | #Points | #Lines | #Triangles | #TriangleStrip | #TriangleFan ]

type vertexShaderT
type fragmentShaderT
type programT

type bufferT

type targetT = [ | #ArrayBuffer ]
type usageT = [ | #StaticDraw ]

type attribLocationT
type uniformLocationT

type dataTypeT = [ | #Float ]

@bs.send @bs.return(nullable)
external getContext: (Dom.elementT, @bs.as("webgl") _) => option<glT> = "getContext"
@bs.send external viewport: (glT, ~x: int, ~y: int, ~width: int, ~height: int) => unit = "viewport"
@bs.send
external clearColor: (glT, ~r: float, ~g: float, ~b: float, ~a: float) => unit = "clearColor"

@bs.send
external clear: (
  glT,
  @bs.int
  [
  | @bs.as(0x00000100)
  #DepthBuffer
  | @bs.as(0x00004000)
  #ColorBuffer
  | @bs.as(0x00004100)
  #DepthAndColorBuffer
  ],
) => unit = "clear"
@bs.send external enable: (glT, @bs.int [ | @bs.as(0x0B71) #DepthTest ]) => unit = "enable"

@bs.send
external drawArrays: (
  glT,
  @bs.int
  [
  | @bs.as(0x0000)
  #Points
  | @bs.as(0x0001)
  #Lines
  | @bs.as(0x0004)
  #Triangles
  | @bs.as(0x0005)
  #TriangleStrip
  | @bs.as(0x0006)
  #TriangleFan
  ],
  ~offset: int,
  ~count: int,
) => unit = "drawArrays"

let makeVertexShader: (glT, string) => option<vertexShaderT>
let makeFragmentShader: (glT, string) => option<fragmentShaderT>

let makeProgram: (glT, vertexShaderT, fragmentShaderT) => option<programT>
@bs.send external useProgram: (glT, programT) => unit = "useProgram"

@bs.send @bs.return(nullable) external createBuffer: glT => option<bufferT> = "createBuffer"
@bs.send
external bindBuffer: (glT, @bs.int [ | @bs.as(0x8892) #ArrayBuffer ], bufferT) => unit =
  "bindBuffer"
@bs.send
external bufferData: (
  glT,
  @bs.int [ | @bs.as(0x8892) #ArrayBuffer ],
  Js.Typed_array.ArrayBuffer.t,
  @bs.int [ | @bs.as(0x88E4) #StaticDraw ],
) => unit = "bufferData"
@bs.send
external bufferDataUninitialized: (
  glT,
  @bs.int [ | @bs.as(0x8892) #ArrayBuffer ],
  int,
  @bs.int [ | @bs.as(0x88E4) #StaticDraw ],
) => unit = "bufferData"
@bs.send
external bufferSubData: (
  glT,
  @bs.int [ | @bs.as(0x8892) #ArrayBuffer ],
  int,
  Js.Typed_array.ArrayBuffer.t,
) => unit = "bufferSubData"

let getAttribLocation: (glT, programT, string) => option<attribLocationT>
@bs.send
external vertexAttribPointer: (
  glT,
  attribLocationT,
  ~size: int,
  ~dataType: @bs.int [ | @bs.as(0x1406) #Float ],
  ~normalized: bool,
  ~stride: int,
  ~offset: int,
) => unit = "vertexAttribPointer"
@bs.send
external enableVertexAttribArray: (glT, attribLocationT) => unit = "enableVertexAttribArray"

@bs.send @bs.return(nullable)
external getUniformLocation: (glT, programT, string) => option<uniformLocationT> =
  "getUniformLocation"

@bs.send external uniform1f: (glT, uniformLocationT, float) => unit = "uniform1f"
