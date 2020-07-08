open Belt

type canvasT
type glT

type shaderT
type vertexShaderT = VertexShader(shaderT)
type fragmentShaderT = FragmentShader(shaderT)
type shaderType
type shaderParamT

type programT
type programParamT

@bs.val @bs.scope("document") @bs.return(nullable) external canvas: @bs.as("canvas") _ => option<canvasT> = "querySelector"
@bs.get external width: canvasT => int = "width"
@bs.get external height: canvasT => int = "height"

@bs.send @bs.return(nullable) external getContext: (canvasT, @bs.as("webgl") _) => option<glT> = "getContext"
@bs.send external viewport: (glT, ~x: int, ~y: int, ~width: int, ~height: int) => unit = "viewport"

@bs.get external vertexShader : glT => shaderType = "VERTEX_SHADER"
@bs.get external fragmentShader : glT => shaderType = "FRAGMENT_SHADER"
@bs.send @bs.return(nullable) external createShader: (glT, shaderType) => option<shaderT> = "createShader"
@bs.send external shaderSource: (glT, shaderT, string) => unit = "shaderSource"
@bs.send external compileShader: (glT, shaderT) => unit = "compileShader"
@bs.get external shaderCompileStatus : glT => shaderParamT = "COMPILE_STATUS"
@bs.send external getShaderParamBool: (glT, shaderT, shaderParamT) => bool = "getShaderParameter"

@bs.send external _createProgram: glT => option<programT> = "createProgram" 
@bs.send external attachShader: (glT, programT, shaderT) => unit = "attachShader"
@bs.send external linkProgram: (glT, programT) => unit = "linkProgram"
@bs.get external programLinkStatus : glT => programParamT = "LINK_STATUS"
@bs.send external getProgramParamBool: (glT, programT, programParamT) => bool = "getProgramParameter"
@bs.send external useProgram: (glT, programT) => unit = "useProgram"

let _createShader = (ctx:glT, typ: shaderType, src: string): option<shaderT> => {
    ctx
    ->createShader(typ)
    ->Option.flatMap(shader => {
        ctx->shaderSource(shader, src)
        ctx->compileShader(shader)
        if ctx->getShaderParamBool(shader, ctx->shaderCompileStatus) {
            Some(shader)
        } else {
            None
        }
    })
}

let createVertexShader = (ctx: glT, src: string): option<vertexShaderT> => {
    ctx
    ->_createShader(ctx->vertexShader, src)
    ->Option.map(shader => VertexShader(shader))
}

let createFragmentShader = (ctx: glT, src: string): option<fragmentShaderT> => {
    ctx
    ->_createShader(ctx->fragmentShader, src)
    ->Option.map(shader => FragmentShader(shader))
}

let createProgram = (ctx: glT, vert: vertexShaderT, frag: fragmentShaderT): option<programT> => {
    ctx
    ->_createProgram
    ->Option.flatMap(program => {
        let (VertexShader(v), FragmentShader(f)) = (vert, frag)
        ctx->attachShader(program, v)
        ctx->attachShader(program, f)
        ctx->linkProgram(program)
        if ctx->getProgramParamBool(program, ctx->programLinkStatus) {
            Some(program)
        } else {
            None
        }
    })
}