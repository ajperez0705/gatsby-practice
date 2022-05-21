import React from "react"

// Styles
import tw from "twin.macro"

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>
}

export default Section

const StyledSection = tw.section`
my-20
`
