import React from "react"
import tw from "twin.macro"
import HeadingContent from "../Molecules/HeadingContent"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CategoryCard from "../Molecules/CategoryCard"

function MenuCategoryCtaSection({ children, categories }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
  }

  return (
    <>
      {children}
      <div>
        <Slider {...sliderSettings}>
          {categories.map(category => {
            return (
              <CategoryCard
                headerContent={category.title}
                tag={category.tag}
                paragraphContent={category.paragraphContent}
                card={category.card}
                src={category.src}
                alt={category.alt}
              />
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default MenuCategoryCtaSection
