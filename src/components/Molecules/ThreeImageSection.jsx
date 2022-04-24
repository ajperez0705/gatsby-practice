import React from "react"
import tw from "twin.macro"
import { GatsbyImage } from "gatsby-plugin-image"

function ThreeImageSection({ images, section }) {
  let sectionImages

  switch (section) {
    case "aboutOne":
      sectionImages = images[0].images.filter(
        image => image.title === "Placeholder Image"
      )
      break

    default:
      break
  }

  return (
    <StyledImageSectionContainer>
      <StyledImageMain>
        {sectionImages.slice(0, 1).map((image, index) => {
          return <GatsbyImage key={index} image={image.gatsbyImageData} />
        })}
      </StyledImageMain>
      <StyledImageSectionSupport>
        {sectionImages.slice(1, 3).map((image, index) => {
          return (
            <GatsbyImage
              key={index}
              image={image.gatsbyImageData}
              tw="flex-1 "
            />
          )
        })}
      </StyledImageSectionSupport>
    </StyledImageSectionContainer>
  )
}

export default ThreeImageSection

const StyledImageSectionContainer = tw.div`
flex-1

md:flex
md:flex-direction[column]
`

const StyledImageMain = tw.div`

`

const StyledImageSectionSupport = tw.div`
display[none]

md:display[flex]
`
