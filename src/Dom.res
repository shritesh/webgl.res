type elementT

@bs.val @bs.scope("window")
external requestAnimationFrame: (unit => unit) => unit = "requestAnimationFrame"

@bs.val external setTimeout: (unit => unit, int) => unit = "setTimeout"

@bs.val @bs.scope("document") @bs.return(nullable)
external querySelector: string => option<elementT> = "querySelector"

@bs.send external addEventListener: (elementT, string, unit => unit) => unit = "addEventListener"

@bs.get external getValue: elementT => string = "value"
@bs.get external getWidth: elementT => int = "width"
@bs.get external getHeight: elementT => int = "height"
