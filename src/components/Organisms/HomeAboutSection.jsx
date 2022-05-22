import React from "react"
import tw from "twin.macro"
import InfoCard from "../Molecules/InfoCard"
import ThreeImageSection from "../Molecules/ThreeImageSection"
import Section from "../Section"

function HomeAboutSection({
  children,
  images,
  section,
  businessData,
  businessDataType,
}) {
  return (
    <Section>
      {children}
      <StyledHomeAboutSectionContainer>
        <ThreeImageSection images={images} section={section} />
        <InfoCard
          businessData={businessData}
          businessDataType={businessDataType}
        />
      </StyledHomeAboutSectionContainer>
    </Section>
  )
}

export default HomeAboutSection

const StyledHomeAboutSectionContainer = tw.div`
flex
flex-direction[column]
align-items[center]
flex-col-reverse

lg:flex-direction[row]
`
