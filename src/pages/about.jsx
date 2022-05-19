import React from "react"

// Styles
import tw from "twin.macro"
import Layout from "../components/layout"

// Tools
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

// Components
import HeadingContent from "../components/Molecules/HeadingContent"

function About() {
  const data = useStaticQuery(query)

  const {
    allContentfulMainHeader: { nodes: mainHeaders },
    allContentfulBusinessDetails,
    allContentfulPageImages: { nodes: images },
  } = data

  console.log(images)

  return (
    <Layout>
      <StyledHero
        // css={{
        //   backgroundImage: `url('${heroImage.gatsbyImageData.images.fallback.src}')`,
        // }}
      >
        {mainHeaders.map((heroHeader, index) => {
          if (heroHeader.siteSection === "about__aboutOne-header") {
            return (
              <HeadingContent
                key={index}
                subHeaderContent={heroHeader.subheader}
                mainHeaderContent={heroHeader.heading}
                mainHeaderTag={heroHeader.elementTag}
                paragraphContent={heroHeader.paragraphText.paragraphText}
                buttonData={heroHeader?.buttonData?.buttonData}
              />
            )
          }
        })}
        {/* <GatsbyImage
          image={heroImage.gatsbyImageData}
          css={tw`display[none] md:display[block] md:flex-[1.5]`}
        /> */}
      </StyledHero>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulMainHeader(filter: {pageId: {eq: "about"}}) {
      nodes {
        pageId
        elementTag
        heading
        subheader
        siteSection
        paragraphText {
          paragraphText
        }
        buttonData {
          buttonData {
            content
            link
            type
          }
        }
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
    allContentfulPageImages(filter: {title: {eq: "About Page Images"}}) {
      nodes {
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          title
        }
      }
    }
  }
`

export default About

const StyledHero = tw.div`
flex
justify-between
align-items[center]
flex-wrap

md:bg-none!
`
