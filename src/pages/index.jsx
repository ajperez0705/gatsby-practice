import * as React from "react"

// Styles
import tw from "twin.macro"
import Layout from "../components/layout"

// Tools
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

// Components
import MenuCategoryCtaSection from "../components/Organisms/MenuCategoryCtaSection"
import HeadingContent from "../components/Molecules/HeadingContent"
import HomeAboutSection from "../components/Organisms/HomeAboutSection"
import TestimonialSection from "../components/Organisms/TestimonialSection"
import LocationsSection from "../components/Organisms/LocationsSection"

function Home() {
  const data = useStaticQuery(query)

  const {
    allContentfulMainHeader: { nodes: mainHeaders },
    allContentfulMenuItem: { nodes: menuItems },
    allContentfulBusinessDetails,
    allContentfulPageImages: { nodes: images },
    allContentfulTestimonials: { nodes: testimonials },
    allContentfulLocation: {nodes: locations}
  } = data

  let heroImage = images[0].images.find(
    image => image.title === "Homepage Hero"
  )

  return (
    <Layout>
      <StyledHero
        css={{
          backgroundImage: `url('${heroImage.gatsbyImageData.images.fallback.src}')`,
        }}
      >
        {mainHeaders.map((heroHeader, index) => {
          if (heroHeader.siteSection === "home_hero-header") {
            return (
              <HeadingContent
                key={index}
                subHeaderContent={heroHeader.subheader}
                mainHeaderContent={heroHeader.heading}
                mainHeaderTag={heroHeader.elementTag}
                paragraphContent={heroHeader.paragraphText.paragraphText}
                buttonData={heroHeader.buttonData.buttonData}
              />
            )
          }
        })}
        <GatsbyImage
          image={heroImage.gatsbyImageData}
          css={tw`display[none] md:display[block] md:flex-[1.5]`}
        />
      </StyledHero>
      <MenuCategoryCtaSection menuData={menuItems} foodType="breakfast">
        {mainHeaders.map((aboutHeader, index) => {
          if (aboutHeader.siteSection === "home__aboutOne-header") {
            return (
              <HeadingContent
                key={index}
                subHeaderContent={aboutHeader.subheader}
                mainHeaderContent={aboutHeader.heading}
                mainHeaderTag={aboutHeader.elementTag}
                paragraphContent={aboutHeader.paragraphText.paragraphText}
                buttonData={aboutHeader?.buttonData?.buttonData}
                alignment="center"
              />
            )
          }
        })}
      </MenuCategoryCtaSection>
      <HomeAboutSection
        images={images}
        section="aboutOne"
        businessData={allContentfulBusinessDetails}
      >
        {mainHeaders.map((aboutHeader, index) => {
          if (aboutHeader.siteSection === "home__aboutOne-header") {
            return (
              <HeadingContent
                key={index}
                subHeaderContent={aboutHeader.subheader}
                mainHeaderContent={aboutHeader.heading}
                mainHeaderTag={aboutHeader.elementTag}
                paragraphContent={aboutHeader.paragraphText.paragraphText}
                buttonData={aboutHeader?.buttonData?.buttonData}
                alignment="center"
              />
            )
          }
        })}
      </HomeAboutSection>
      <MenuCategoryCtaSection menuData={menuItems} foodType="lunch">
        {mainHeaders.map((aboutHeader, index) => {
          if (aboutHeader.siteSection === "home__menuTwo-header") {
            return (
              <HeadingContent
                key={index}
                subHeaderContent={aboutHeader.subheader}
                mainHeaderContent={aboutHeader.heading}
                mainHeaderTag={aboutHeader.elementTag}
                paragraphContent={aboutHeader.paragraphText.paragraphText}
                buttonData={aboutHeader?.buttonData?.buttonData}
                alignment="center"
              />
            )
          }
        })}
      </MenuCategoryCtaSection>
      <TestimonialSection testimonials={testimonials}>
        {mainHeaders.map((testimonial, index) => {
          if (testimonial.siteSection === "home__testimonial-header") {
            return (
              <HeadingContent
                key={index}
                subHeaderContent={testimonial.subheader}
                mainHeaderContent={testimonial.heading}
                mainHeaderTag={testimonial.elementTag}
                paragraphContent={testimonial.paragraphText.paragraphText}
                buttonData={testimonial?.buttonData?.buttonData}
                alignment="center"
              />
            )
          }
        })}
      </TestimonialSection>
      <StyledHero
        // heroImage={heroImageBg}
        css={{
          backgroundImage: `url('${heroImage.gatsbyImageData.images.fallback.src}')`,
        }}
      >
        {mainHeaders.map((heroHeader, index) => {
          if (heroHeader.siteSection === "home__subhero-header") {
            return (
              <HeadingContent
                key={index}
                subHeaderContent={heroHeader.subheader}
                mainHeaderContent={heroHeader.heading}
                mainHeaderTag={heroHeader.elementTag}
                paragraphContent={heroHeader.paragraphText.paragraphText}
              />
            )
          }
        })}
        <GatsbyImage
          image={heroImage.gatsbyImageData}
          css={tw`display[none] md:display[block] md:flex-[1.5]`}
        />
      </StyledHero>
      <MenuCategoryCtaSection menuData={menuItems} foodType="drink">
        {mainHeaders.map((aboutHeader, index) => {
          if (aboutHeader.siteSection === "home__menuThree-header") {
            return (
              <HeadingContent
                key={index}
                subHeaderContent={aboutHeader.subheader}
                mainHeaderContent={aboutHeader.heading}
                mainHeaderTag={aboutHeader.elementTag}
                paragraphContent={aboutHeader.paragraphText.paragraphText}
                buttonData={aboutHeader?.buttonData?.buttonData}
                alignment="center"
              />
            )
          }
        })}
      </MenuCategoryCtaSection>
      <HomeAboutSection
        images={images}
        section="aboutOne"
        businessData={allContentfulBusinessDetails}
      >
        {mainHeaders.map((aboutHeader, index) => {
          if (aboutHeader.siteSection === "home__aboutTwo-header") {
            return (
              <HeadingContent
                key={index}
                subHeaderContent={aboutHeader.subheader}
                mainHeaderContent={aboutHeader.heading}
                mainHeaderTag={aboutHeader.elementTag}
                paragraphContent={aboutHeader.paragraphText.paragraphText}
                buttonData={aboutHeader?.buttonData?.buttonData}
                alignment="center"
              />
            )
          }
        })}
      </HomeAboutSection>
      <LocationsSection locations={locations}>
        {mainHeaders.map((locationHeader, index) => {
            if (locationHeader.siteSection === "home__locations-header") {
              return (
                <HeadingContent
                  key={index}
                  subHeaderContent={locationHeader.subheader}
                  mainHeaderContent={locationHeader.heading}
                  mainHeaderTag={locationHeader.elementTag}
                  paragraphContent={locationHeader.paragraphText.paragraphText}
                  buttonData={locationHeader?.buttonData?.buttonData}
                  alignment="center"
                />
              )
            }
          })}
      </LocationsSection>
    </Layout>
  )
}

export default Home

const StyledHero = tw.div`
flex
justify-between
align-items[center]
flex-wrap

md:bg-none!
`

export const query = graphql`
  {
    allContentfulMainHeader(filter: { pageId: { eq: "home" } }) {
      nodes {
        elementTag
        pageId
        paragraphText {
          paragraphText
        }
        siteSection
        subheader
        heading
        buttonData {
          buttonData {
            content
            link
            type
          }
        }
      }
    }
    allContentfulMenuItem(filter: { featured: { eq: true } }) {
      nodes {
        category
        featured
        itemDescription
        itemImage {
          gatsbyImageData(
            cornerRadius: 8
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
        foodType
        price
        title
      }
    }
    allContentfulTestimonials {
      totalCount
      nodes {
        siteSection
        testimonialImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        paragraphText {
          paragraphText
        }
        name
        stars
      }
    }
    allContentfulBusinessDetails(limit: 8) {
      nodes {
        homeAboutSectionInfoCards {
          infoCardData {
            featured
            icon
            paragraphText
            tag
            title
          }
        }
      }
    }
    allContentfulLocation {
    nodes {
      id
      locationImage {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
      paragraphText {
        paragraphText
      }
      pageId
      title
      linkText
    }
  }
    allContentfulPageImages(filter: { title: { eq: "Homepage Images" } }) {
      nodes {
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          title
        }
      }
    }
  }
`
