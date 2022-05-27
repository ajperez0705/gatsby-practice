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
// min-h-[80vh]
relative

after:block
after:absolute
after:top-0
after:left-0
after:background-color[rgba(0, 0, 0, 0.24);]
after:h-full
after:w-full

md:after:display[none]

md:bg-none!
`
