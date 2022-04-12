import React from "react"
import tw from "twin.macro"
import Button from "../Atoms/Button"
import MainHeader from "../Atoms/MainHeader"
import ParagraphText from "../Atoms/ParagraphText"
import SubHeader from "../Atoms/SubHeader"

function HeadingContent({
  subHeaderContent,
  mainHeaderContent,
  mainHeaderTag,
  paragraphContent,
  buttonData,
  buttonDataTwo,
  alignment = "left"
}) {
  return (
    <StyledHeadingContainer alignment={alignment}>
      <SubHeader content={subHeaderContent} />
      <MainHeader content={mainHeaderContent} tag={mainHeaderTag} />
      <ParagraphText content={paragraphContent} alignment={alignment} />
      <StyledButtonContainer>
      <Button
        content={buttonData.content}
        type={buttonData.type}
        link={buttonData.link}
      />
      <Button
        content={buttonDataTwo.content}
        type={buttonDataTwo.type}
        link={buttonDataTwo.link}
      />
      </StyledButtonContainer>
    </StyledHeadingContainer>
  )
}

export default HeadingContent

const StyledHeadingContainer = ({ alignment, children }) => (
  <div
    css={[
      alignment === 'center' ?
      tw`
      text-center
      ` 
      
      : 

      tw`
      text-center
      md:text-left 
      `,

      tw`
      py-6
      md:px-4
      md:py-6
      `
    ]}
  >
    {children}
  </div>
)

const StyledButtonContainer = tw.div`
first:mr-6
`


