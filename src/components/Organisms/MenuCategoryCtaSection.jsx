import React from "react"
import tw from "twin.macro"
import HeadingContent from "../Molecules/HeadingContent"
import Button from "../Atoms/Button"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CategoryCard from "../Molecules/CategoryCard"

function MenuCategoryCtaSection({ children, menuData, screenWidth, foodType }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
  }

  return (
    <>
      {children}
      {screenWidth < 768 ? (
        <Slider {...sliderSettings}>
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
    </>
  )
}

export default MenuCategoryCtaSection
