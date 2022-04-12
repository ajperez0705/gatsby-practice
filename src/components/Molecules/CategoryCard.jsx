import React from "react"
import tw from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "../Atoms/Icon"
import MainHeader from "../Atoms/MainHeader"
import ParagraphText from "../Atoms/ParagraphText"

function CategoryCard({
  headerContent,
  tag,
  paragraphContent,
  card,
  src,
  alt,
}) {
  console.log(`"${src}"`)
  return (
    <>
      <CategoryCardContainer>
        <StyledTextContent>
          <Icon />
          <MainHeader content={headerContent} tag={tag} />
          <ParagraphText content={paragraphContent} card={card} />
        </StyledTextContent>
        <StaticImage
          src={`"${src}"`}
          alt={alt}
          placeholder="blurred"
          layout="constrained"
          objectFit="contain"
        />
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
