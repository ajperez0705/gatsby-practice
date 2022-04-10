import React from "react"
import tw from "twin.macro"

function MainHeader({ content, tag }) {
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
text-h1
`

const StyledMainH2 = tw.h2`
text-h2
`

const StyledMainH3 = tw.h3`
text-h3
`

const StyledMainH4 = tw.h4`
text-h4
`
