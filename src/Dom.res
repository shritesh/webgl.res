type elementT
type mouseEventT

@bs.val @bs.scope("window")
external requestAnimationFrame: (unit => unit) => unit = "requestAnimationFrame"

@bs.val external setTimeout: (unit => unit, int) => unit = "setTimeout"

@bs.val @bs.scope("document") @bs.return(nullable)
external querySelector: string => option<elementT> = "querySelector"

@bs.get external getValue: elementT => string = "value"

@bs.get external getWidth: elementT => int = "width"
@bs.get external getHeight: elementT => int = "height"

@bs.send
external onClick: (elementT, @bs.as("click") _, mouseEventT => unit) => unit = "addEventListener"
@bs.send external onInput: (elementT, @bs.as("input") _, unit => unit) => unit = "addEventListener"

@bs.send
external onMouseMove: (elementT, @bs.as("mousemove") _, mouseEventT => unit) => unit =
  "addEventListener"
@bs.send
external onMouseDown: (elementT, @bs.as("mousedown") _, mouseEventT => unit) => unit =
  "addEventListener"
@bs.send
external onMouseUp: (elementT, @bs.as("mouseup") _, mouseEventT => unit) => unit =
  "addEventListener"

@bs.get external getOffsetX: mouseEventT => float = "offsetX"
@bs.get external getOffsetY: mouseEventT => float = "offsetY"
