import React from "react"
import tw from "twin.macro"
import ParagraphText from "../Atoms/ParagraphText"
import { GatsbyImage } from "gatsby-plugin-image"
import Icon from "../Atoms/Icon"

function TestimonialCard({ name, paragraphText, stars, testimonialImage }) {
  return (
    <>
      <CategoryCardContainer>
        <StyledTextContent>
          <GatsbyImage image={testimonialImage.gatsbyImageData} />
          <ParagraphText content={paragraphText} card={card} />
          <ParagraphText content={name} card={card} />
          {/* {for (let index = 0; index < stars; index++) {
                const element = array[index];
                
            }} */}
          <Icon />
        </StyledTextContent>
      </CategoryCardContainer>
    </>
  )
}

export default TestimonialCard

const CategoryCardContainer = tw.div`
    flex
    flex-col
    justify-between
    max-w-[296px]
    bg-baseBgAlt
    rounded-3xl
    p-4
    shadow-lg
    h-[408px] 
    
    md:h-[472px] 
    md:max-w-[392px]
    `

const StyledTextContent = tw.div`
    
    `
