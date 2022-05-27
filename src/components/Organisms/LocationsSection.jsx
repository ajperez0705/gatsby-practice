import React from "react"
import tw from "twin.macro"
import Button from "../Atoms/Button"
import CategoryCard from "../Molecules/CategoryCard"
import Section from "../Section"

function LocationsSection({ children, locations, screenWidth }) {
  return (
    <Section>
      {children}
      <LocationContainer>
        {locations.map((location, index) => {
          return (
            <CardContainer>
              <CategoryCard
                key={index}
                id={index}
                title={location.title}
                tag="h4"
                description={location.paragraphText.paragraphText}
                card={true}
                image={location.locationImage}
                alt="test alt"
              />
              <Button
                content="View Location"
                type="primary"
                link={location.linkText}
              />
            </CardContainer>
          )
        })}
      </LocationContainer>
    </Section>
  )
}

export default LocationsSection

const LocationContainer = tw.div`
flex
flex-col
align-items[center]

md:flex-row
md:justify-center
`

const CardContainer = tw.div`
mb-16
`
