import React from "react"
import tw from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "../Atoms/Icon"
import MainHeader from "../Atoms/MainHeader"
import ParagraphText from "../Atoms/ParagraphText"
import { GatsbyImage } from "gatsby-plugin-image"

function CategoryCard({ title, tag, description, card, alt, image, category }) {
  return (
    <>
      <CategoryCardContainer>
        <StyledTextContent>
          <Icon />
          <MainHeader content={title} tag={tag} />
          <ParagraphText content={description} card={card} />
        </StyledTextContent>
        <GatsbyImage image={image.gatsbyImageData} />
      </CategoryCardContainer>
    </>
  )
}

export default CategoryCard

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
