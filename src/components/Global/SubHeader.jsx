import React from "react"
import tw from "twin.macro"

function SubHeader({ content }) {
  return <StyledSubHeader>{content}</StyledSubHeader>
}

export default SubHeader

const StyledSubHeader = tw.h6`
text-subHeader
relative

before:w-8
before:bg-primary
before:h-1
before:absolute
before:bottom-0
`
