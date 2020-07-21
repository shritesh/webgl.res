{
  open Belt
  open WebGl
  open Vec2

  let _NUM_POINTS = 100_000

  let canvas = getCanvas()->Option.getExn
  let gl = canvas->getContext->Option.getExn

  let vertexShader =
    gl
    ->makeVertexShader(
      `
      attribute vec4 vPosition;

      void main() {
        gl_PointSize = 1.0;
        gl_Position = vPosition;
      }
      `,
    )
    ->Option.getExn

  let fragmentShader =
    gl
    ->makeFragmentShader(
      `
      precision mediump float;

      void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
      `,
    )
    ->Option.getExn

  let program = gl->makeProgram(vertexShader, fragmentShader)->Option.getExn

  gl->useProgram(program)

  let (v0, v1, v2) = ((-1.0, -1.0), (0.0, 1.0), (1.0, -1.0))

  let u = v0->add(v1)->scale(0.5)
  let v = v0->add(v2)->scale(0.5)

  let p = u->add(v)->scale(0.5)->ref

  let vertices = Array.makeBy(_NUM_POINTS, _ => {
    let vertex = switch Js.Math.random_int(0, 3) {
    | 0 => v0
    | 1 => v1
    | _ => v2
    }
    p := p.contents->add(vertex)->scale(0.5)
    p.contents
  })

  let buffer = gl->createBuffer->Option.getExn
  gl->bindBuffer(#ArrayBuffer, buffer)
  gl->bufferData(#ArrayBuffer, vertices->flatten, #StaticDraw)

  let vPosition = gl->getAttribLocation(program, "vPosition")->Option.getExn
  gl->vertexAttribPointer(
    vPosition,
    ~size=2,
    ~dataType=#Float,
    ~normalized=false,
    ~stride=0,
    ~offset=0,
  )
  gl->enableVertexAttribArray(vPosition)

  gl->viewport(~x=0, ~y=0, ~width=canvas->width, ~height=canvas->height)
  gl->clearColor(~r=1.0, ~g=1.0, ~b=1.0, ~a=1.0)
  gl->clear(#ColorBuffer)
  gl->drawArrays(#Points, ~offset=0, ~count=vertices->Array.length)
}