import React from "react"
import tw from "twin.macro"
import Icon from "../Atoms/Icon"
import HeadingContent from "./HeadingContent"

function InfoCard({ businessData, businessDataType }) {
  let data
  console.log(businessData)

  // This switch statement would be used to pull out images for specific about sections of site. Need to come back here when images are added with purpose (actual title and unique images)
  switch (businessDataType) {
    case "about":
      data = businessData.nodes[1].homeAboutSectionInfoCards.infoCardData

      break

    case "location":
      data = businessData[0].locationDetails.data
      break

    default:
      break
  }

  return (
    <StyledInfoCardContainer>
      {businessDataType === "about"
        ? data
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
            })
        : data.map((location, index) => {
            return (
              <div>
                <Icon />
                <HeadingContent
                  key={index}
                  mainHeaderTag="h4"
                  mainHeaderContent={location.title}
                  paragraphContent={location.paragraphText}
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
