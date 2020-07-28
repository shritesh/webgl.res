type elementT

@bs.val @bs.scope("window")
external requestAnimationFrame: (unit => unit) => unit = "requestAnimationFrame"

@bs.val @bs.scope("document") @bs.return(nullable)
external querySelector: string => option<elementT> = "querySelector"
