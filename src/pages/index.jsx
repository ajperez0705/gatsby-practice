import * as React from "react"
import tw, { styled } from "twin.macro"
import Button from "../components/Atoms/Button"
import Icon from "../components/Atoms/Icon"
import MainHeader from "../components/Atoms/MainHeader"
import ParagraphText from "../components/Atoms/ParagraphText"
import SubHeader from "../components/Atoms/SubHeader"
import Layout from "../components/layout"
import CategoryCard from "../components/Molecules/CategoryCard"
import HeadingContent from "../components/Molecules/HeadingContent"
import ThreeImageSection from "../components/Molecules/ThreeImageSection"
import MenuCategoryCtaSection from "../components/Organisms/MenuCategoryCtaSection"
import { GatsbyImage } from "gatsby-plugin-image"

import { graphql, useStaticQuery } from "gatsby"
import HomeAboutSection from "../components/Organisms/HomeAboutSection"
import InfoCard from "../components/Molecules/InfoCard"

function Home() {
  const data = useStaticQuery(query)

  const {
    allContentfulMainHeader: { nodes: mainHeaders },
    allContentfulMenuItem: { nodes: menuItems },
    allContentfulBusinessDetails,
    allContentfulPageImages: { nodes: images },
    allContentfulTestimonials,
  } = data

  console.log(allContentfulTestimonials)

  let heroImage = images[0].images.find(
    image => image.title === "Homepage Hero"
  )

  let placeholder = images.find(image => image.title === "Placeholder Image")

  // let breakfastMenu = menuItems.forEach()

  return (
    <Layout>
      <StyledHero
        // heroImage={heroImageBg}
        css={{
          backgroundImage: `url('${heroImage.gatsbyImageData.images.fallback.src}')`,
        }}
      >
        {mainHeaders.map((heroHeader, index) => {
          if (heroHeader.siteSection === "home_menuOne-header") {
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
    allContentfulLocationDetails {
      nodes {
        siteSection
        title
        paragraphText {
          paragraphText
        }
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
