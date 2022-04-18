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
    allContentfulAsset: { nodes: images },
  } = data

  console.log(data)

  let heroImage = images.find(image => image.title === "Homepage Hero")

  let placeholder = images.find(image => image.title == "Placeholder Image")

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
          if (heroHeader.siteSection === "home_hero-header") {
            return (
              <HeadingContent
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
          if (aboutHeader.siteSection == "home__aboutOne-header") {
            return (
              <HeadingContent
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
      <HomeAboutSection>
        <InfoCard />
      </HomeAboutSection>
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
    allContentfulAsset {
      nodes {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        title
      }
    }
  }
`
