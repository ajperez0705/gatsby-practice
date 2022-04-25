import React from "react"
import tw, { styled } from "twin.macro"
import TestimonialCard from "../Molecules/TestimonialCard"
import { mediumScreen } from "../../helpers/breakpoints"

// Slider imports
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function TestimonialSection({ children, testimonials, screenWidth }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      {children}
      <StyledTestimonialSection>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => {
            return (
              <TestimonialCard
                key={index}
                screenWidth={screenWidth}
                name={testimonial.name}
                paragraphText={testimonial.paragraphText.paragraphText}
                stars={testimonial.stars}
                image={testimonial.testimonialImage}
              />
            )
          })}
        </Slider>
      </StyledTestimonialSection>
    </>
  )
}

export default TestimonialSection

const StyledTestimonialSection = styled.div`
  .slick-list {
    padding: 80px 0;
  }
`

const StyledSlider = tw(Slider)`
py-10

first-of-type:ml-6
`
