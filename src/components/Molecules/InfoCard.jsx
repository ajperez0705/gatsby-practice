import React from "react"
import tw from "twin.macro"
import Icon from "../Atoms/Icon"
import HeadingContent from "./HeadingContent"

function InfoCard(businessData) {
  return (
    <StyledInfoCardContainer>
      {businessData.businessData.nodes[1].homeAboutSectionInfoCards.infoCardData
        .filter(detail => detail.featured === true)
        .map((detail, index) => {
          return (
            <div>
              <Icon />
              <HeadingContent
                key={index}
                mainHeaderTag="h4"
                mainHeaderContent={detail.title}
                paragraphContent={detail.paragraphText}
                alignment="left"
              />
            </div>
          )
        })}
    </StyledInfoCardContainer>
  )
}

export default InfoCard

const StyledInfoCardContainer = tw.div`
grid
grid-cols-1
auto-rows-min

md:grid-cols-2
md:flex-direction[row]
md:flex-1
`
