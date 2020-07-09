open Belt

type canvasT
type glT

type shaderT
type vertexShaderT = VertexShader(shaderT)
type fragmentShaderT = FragmentShader(shaderT)

type programT

@bs.val @bs.scope("document") @bs.return(nullable) external canvas: @bs.as("canvas") _ => option<canvasT> = "querySelector"
@bs.get external width: canvasT => int = "width"
@bs.get external height: canvasT => int = "height"

@bs.send @bs.return(nullable) external getContext: (canvasT, @bs.as("webgl") _) => option<glT> = "getContext"
@bs.send external viewport: (glT, ~x: int, ~y: int, ~width: int, ~height: int) => unit = "viewport"

@bs.send @bs.return(nullable) external createShader: (glT, @bs.int [@bs.as(0x8B31) #vertexShader | @bs.as(0x8B30) #fragmentShader]) => option<shaderT> = "createShader"

@bs.send external shaderSource: (glT, shaderT, string) => unit = "shaderSource"
@bs.send external compileShader: (glT, shaderT) => unit = "compileShader"
@bs.send external getShaderParamBool: (glT, shaderT, @bs.int [@bs.as(0x8B81) #compileStatus]) => bool = "getShaderParameter"

@bs.send external createProgram: glT => option<programT> = "createProgram" 
@bs.send external attachShader: (glT, programT, shaderT) => unit = "attachShader"
@bs.send external linkProgram: (glT, programT) => unit = "linkProgram"
@bs.send external getProgramParamBool: (glT, programT, @bs.int [@bs.as(0x8B82) #linkStatus]) => bool = "getProgramParameter"
@bs.send external useProgram: (glT, programT) => unit = "useProgram"

let makeShader = (ctx:glT, typ: [#vertexShader | #fragmentShader], src: string): option<shaderT> => {
    ctx
    ->createShader(typ)
    ->Option.flatMap(shader => {
        ctx->shaderSource(shader, src)
        ctx->compileShader(shader)
        if ctx->getShaderParamBool(shader, #compileStatus) {
            Some(shader)
        } else {
            None
        }
    })
}

let makeVertexShader = (ctx: glT, src: string): option<vertexShaderT> => {
    ctx
    ->makeShader(#vertexShader, src)
    ->Option.map(shader => VertexShader(shader))
}

let makeFragmentShader = (ctx: glT, src: string): option<fragmentShaderT> => {
    ctx
    ->makeShader(#fragmentShader, src)
    ->Option.map(shader => FragmentShader(shader))
}

let makeProgram = (ctx: glT, vert: vertexShaderT, frag: fragmentShaderT): option<programT> => {
    ctx
    ->createProgram
    ->Option.flatMap(program => {
        let (VertexShader(v), FragmentShader(f)) = (vert, frag)
        ctx->attachShader(program, v)
        ctx->attachShader(program, f)
        ctx->linkProgram(program)
        if ctx->getProgramParamBool(program, #linkStatus) {
            Some(program)
        } else {
            None
        }
    })
}