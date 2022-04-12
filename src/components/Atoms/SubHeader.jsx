import React from "react"
import tw from "twin.macro"

function SubHeader({ content }) {
  return <StyledSubHeader>{content}</StyledSubHeader>
}

export default SubHeader

const StyledSubHeader = tw.h6`
// text-subHeader
text-2xl
relative
mb-4
inline-block

before:w-8
before:bg-primary
before:h-1
before:absolute
before:bottom-0
before:left-2
`
