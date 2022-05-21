import React from "react"

// Styles
import tw from "twin.macro"

function Hero({ children, fallbackImage }) {
  return (
    <StyledHero
      css={{
        backgroundImage: `url('${fallbackImage}')`,
      }}
    >
      {children}
    </StyledHero>
  )
}

export default Hero

const StyledHero = tw.div`
flex
justify-between
align-items[center]
flex-wrap
-mx-4
px-4
min-h-[80vh]

md:bg-none!
`
