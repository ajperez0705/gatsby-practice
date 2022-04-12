import React from "react"
import tw from "twin.macro"

function ParagraphText({ content, alignment = "left", card = false }) {
  return (
    <StyledParagraphText alignment={alignment} card={card}>
      {content}
    </StyledParagraphText>
  )
}

export default ParagraphText

const StyledParagraphText = ({ alignment, children, card }) => (
  <p
    css={[
      tw`
      // text-body
      pb-8
      
      md:text-lg
      `,

      alignment === "center"
        ? tw`
      text-center 
      mx-auto
      my-0

      md:w-10/12
      `
        : tw`
      text-center 
      mx-auto
      
      
      md:text-left
      md:w-10/12
      md:mx-0
      `,

      card &&
        tw`
      w-full
      text-left
      `,
    ]}
  >
    {children}
  </p>
)
