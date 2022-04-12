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
  buttonData = null,
  alignment = "left",
}) {
  console.log(buttonData)

  return (
    <StyledHeadingContainer alignment={alignment}>
      <SubHeader content={subHeaderContent} />
      <MainHeader content={mainHeaderContent} tag={mainHeaderTag} />
      <ParagraphText content={paragraphContent} alignment={alignment} />
      <StyledButtonContainer>
        {buttonData !== null &&
          buttonData.map(button => {
            return (
              <Button
                content={button.content}
                type={button.type}
                link={button.link}
              />
            )
          })}
      </StyledButtonContainer>
    </StyledHeadingContainer>
  )
}

export default HeadingContent

const StyledHeadingContainer = ({ alignment, children }) => (
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

      tw`
      py-6
      md:px-4
      md:py-6
      `,
    ]}
  >
    {children}
  </div>
)

const StyledButtonContainer = tw.div`
first:mr-6
`
