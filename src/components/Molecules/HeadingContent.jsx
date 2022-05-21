import React from "react"
import tw from "twin.macro"
import Button from "../Atoms/Button"
import MainHeader from "../Atoms/MainHeader"
import ParagraphText from "../Atoms/ParagraphText"
import SubHeader from "../Atoms/SubHeader"

function HeadingContent({
  textColor,
  subHeaderContent = null,
  mainHeaderContent,
  mainHeaderTag,
  paragraphContent,
  buttonData = null,
  alignment = "left",
  buttonAlignment,
}) {
  return (
    <StyledHeadingContainer alignment={alignment} textColor={textColor}>
      {subHeaderContent ? <SubHeader content={subHeaderContent} /> : null}
      <MainHeader content={mainHeaderContent} tag={mainHeaderTag} />
      <ParagraphText content={paragraphContent} alignment={alignment} />
      <StyledButtonContainer alignment={buttonAlignment}>
        {buttonData !== null &&
          buttonData.map(button => {
            return (
              <Button
                content={button.content}
                type={button.type}
                link={button.link}
                alignment={buttonAlignment}
              />
            )
          })}
      </StyledButtonContainer>
    </StyledHeadingContainer>
  )
}

export default HeadingContent

const StyledHeadingContainer = ({ alignment, textColor, children }) => (
  <div
    css={[
      alignment === "center"
        ? tw`
      text-center
      `
        : tw`
      text-center
      md:text-left 
      `,

      textColor
        ? tw`
        text-baseBgAlt
        `
        : tw`
        text-text  
        `,

      tw`
      py-6
      flex-1

      md:px-4
      md:py-6
      md:text-text
      `,
    ]}
  >
    {children}
  </div>
)

const StyledButtonContainer = ({ alignment, children }) => (
  <div
    css={[
      tw`
      flex
      justify-center
      first:mr-6
      `,

      alignment === "center"
        ? tw`
      md:justify-center
      `
        : tw`
      md:justify-start       
      `,
    ]}
  >
    {children}
  </div>
)
