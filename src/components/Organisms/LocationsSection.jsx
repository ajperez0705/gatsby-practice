import React from "react"
import tw from "twin.macro"
import Button from "../Atoms/Button"
import CategoryCard from "../Molecules/CategoryCard"

function LocationsSection({ children, locations, screenWidth }) {
  return (
    <>
        {children}
        <LocationContainer>
            {locations.map((location, index) => {
                return (
                <>
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
                </>
                )
            })}
        </LocationContainer>
    </>
  )
}

export default LocationsSection

const LocationContainer = tw.div`
flex
flex-col
align-items[center]
`