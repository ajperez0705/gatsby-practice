import React from "react"
import tw from "twin.macro"
import HeadingContent from "../Molecules/HeadingContent"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CategoryCard from "../Molecules/CategoryCard"

function MenuCategoryCtaSection({ children, menuData, screenWidth }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
  }

  console.log(screenWidth)

  return (
    <>
      {children}
      {screenWidth < 768 ? (
        <Slider {...sliderSettings}>
          {menuData.map((item, index) => {
            return (
              <CategoryCard
                id={index}
                title={item.title}
                tag="h4"
                description={item.itemDescription}
                card={true}
                category={item.category}
                image={item.itemImage}
                alt="test alt"
              />
            )
          })}
        </Slider>
      ) : (
        <div css={tw`flex`}>
          {menuData.map((item, index) => {
            return (
              <CategoryCard
                id={index}
                title={item.title}
                tag="h4"
                description={item.itemDescription}
                card={true}
                category={item.category}
                image={item.itemImage}
                alt="test alt"
              />
            )
          })}
        </div>
      )}
    </>
  )
}

export default MenuCategoryCtaSection
