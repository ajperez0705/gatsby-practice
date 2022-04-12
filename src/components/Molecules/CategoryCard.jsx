import React from "react"
import tw from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "../Atoms/Icon"
import MainHeader from "../Atoms/MainHeader"
import ParagraphText from "../Atoms/ParagraphText"

import test from "../../assets/food-placeholder.png"

function CategoryCard() {
  return (
    <CategoryCardContainer>
      <StyledTextContent>
        <Icon />
        <MainHeader content="Category Header" tag="h4" />
        <ParagraphText
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
          card={true}
        />
      </StyledTextContent>
      <StaticImage
        src="../../assets/food-placeholder-mask.png"
        alt="food"
        placeholder="blurred"
        layout="constrained"
        objectFit="contain"
      />
    </CategoryCardContainer>
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
