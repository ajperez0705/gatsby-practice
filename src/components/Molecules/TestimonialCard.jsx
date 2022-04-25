import React, { useEffect } from "react"
import tw, { css } from "twin.macro"
import ParagraphText from "../Atoms/ParagraphText"
import { GatsbyImage } from "gatsby-plugin-image"
import Icon from "../Atoms/Icon"
import { mediumScreen } from "../../helpers/breakpoints"

function TestimonialCard({ name, paragraphText, stars, image, screenWidth }) {
  console.log(screenWidth, mediumScreen)
  // let NumOfStars;

  // useEffect(() => {

  //   return () => {
  //     second
  //   }
  // }, [third])

  // function numOfStars(stars) {
  //     menuOne
  // }

  return (
    <>
      {screenWidth < mediumScreen ? (
        <>
          <TestimonialCardContainer>
            <StyledTextContent>
              <GatsbyImage
                image={image.gatsbyImageData}
                imgStyle={{ borderRadius: `50%`, height: 150 }}
                style={{ height: 150, width: 150, top: `-50px` }}
              />
              <ParagraphText content={paragraphText} />
              <ParagraphText content={name} />
              {/* {for (let index = 0; index < stars; index++) {
                const element = array[index];
                
            }} */}
              <Icon />
            </StyledTextContent>
          </TestimonialCardContainer>
        </>
      ) : (
        <>
          <GatsbyImage image={image.gatsbyImageData} />
          <TestimonialCardContainer>
            <StyledTextContent>
              <ParagraphText content={paragraphText} />
              <ParagraphText content={name} />
              {/* {for (let index = 0; index < stars; index++) {
                const element = array[index];
                
            }} */}
              <Icon />
            </StyledTextContent>
          </TestimonialCardContainer>
        </>
      )}
    </>
  )
}

export default TestimonialCard

const TestimonialCardContainer = tw.div`
    flex
    flex-col
    justify-between
    max-w-[296px]
    bg-baseBgAlt
    rounded-3xl
    p-4
    shadow-lg
    h-auto
    
    md:h-[472px] 
    md:max-w-[392px]
    `

const StyledTextContent = tw.div`
    flex
    flex-direction[column]
    align-items[center]
`

// const StyledImage = css`
//   ${tw`rounded-full h-40`}
// `
