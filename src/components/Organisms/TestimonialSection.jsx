import React from "react"
import tw, { styled } from "twin.macro"
import TestimonialCard from "../Molecules/TestimonialCard"
import { mediumScreen } from "../../helpers/breakpoints"

// Slider imports
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Section from "../Section"

function TestimonialSection({ children, testimonials, screenWidth }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Section>
      {screenWidth < mediumScreen ? (
        <StyledMobileTestimonialSection>
          {children}
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
        </StyledMobileTestimonialSection>
      ) : (
        <StyledTestimonialSection>
          {children}
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
      )}
    </Section>
  )
}

export default TestimonialSection

const StyledMobileTestimonialSection = styled.div`
  .slick-list {
    padding: 80px 0;
  }
`

const StyledTestimonialSection = tw.div`
// flex
`

const StyledSlider = tw(Slider)`
py-10

first-of-type:ml-6
`
