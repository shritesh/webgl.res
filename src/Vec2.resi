open Js.Typed_array

type t = (float, float)

let flatten: array<t> => ArrayBuffer.t