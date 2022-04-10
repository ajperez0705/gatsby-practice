import React from "react"
import tw from "twin.macro"

function ParagraphText({ content }) {
  return <StyledParagraphText>{content}</StyledParagraphText>
}

export default ParagraphText

const StyledParagraphText = tw.p`
text-body
w-6/12
`
