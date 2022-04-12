import React from "react"
import tw from "twin.macro"

function MainHeader({ content, tag = "h1" }) {
  let styledHeader

  switch (tag) {
    case "h1":
      styledHeader = <StyledMainH1>{content}</StyledMainH1>
      break

    case "h2":
      styledHeader = <StyledMainH2>{content}</StyledMainH2>
      break

    case "h3":
      styledHeader = <StyledMainH3>{content}</StyledMainH3>
      break

    case "h4":
      styledHeader = <StyledMainH4>{content}</StyledMainH4>
      break

    default:
      break
  }

  return styledHeader
}

export default MainHeader

const StyledMainH1 = tw.h1`
text-5xl
pb-2.5

md:text-6xl
`

const StyledMainH2 = tw.h2`
text-4xl
pb-2.5

md:text-5xl
`

const StyledMainH3 = tw.h3`
text-3xl
pb-2.5

md:text-4xl
`

const StyledMainH4 = tw.h4`
text-2xl
pb-2.5

md:text-3xl
`
