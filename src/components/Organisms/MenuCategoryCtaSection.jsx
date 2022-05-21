import React from "react"
import tw from "twin.macro"
import Button from "../Atoms/Button"

// Slider imports
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CategoryCard from "../Molecules/CategoryCard"
import { mediumScreen } from "../../helpers/breakpoints"
import Section from "../Section"

function MenuCategoryCtaSection({ children, menuData, screenWidth, foodType }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
  }

  return (
    <Section>
      {children}
      {screenWidth < mediumScreen ? (
        <Slider {...sliderSettings} css={[tw`mb-16`]}>
          {menuData.map((item, index) => {
            if (item.foodType === foodType) {
              return (
                <CategoryCard
                  key={index}
                  id={index}
                  title={item.title}
                  tag="h4"
                  description={item.itemDescription}
                  card={true}
                  foodType={item.foodType}
                  image={item.itemImage}
                  alt="test alt"
                />
              )
            }
          })}
        </Slider>
      ) : (
        <div css={tw`flex`}>
          {menuData.map((item, index) => {
            if (item.foodType === foodType) {
              return (
                <CategoryCard
                  id={index}
                  title={item.title}
                  tag="h4"
                  description={item.itemDescription}
                  card={true}
                  foodType={item.foodType}
                  image={item.itemImage}
                  alt="test alt"
                />
              )
            }
          })}
        </div>
      )}
      <Button content="Click Me" link="/" />
    </Section>
  )
}

export default MenuCategoryCtaSection
