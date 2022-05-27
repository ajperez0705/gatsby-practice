import React from "react"

// Styles
import tw from "twin.macro"
import Layout from "../../components/layout"

// Tools
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

// Components
import InfoCard from "../../components/Molecules/InfoCard"
import Section from "../../components/Section"
import HeadingContent from "../../components/Molecules/HeadingContent"

function LocationOne() {
  const data = useStaticQuery(query)

  const {
    allContentfulMainHeader: { nodes: mainHeaders },
    allContentfulLocation: { nodes: location },
  } = data

  return (
    <Layout>
      <LocationLayout>
        <div>
          {mainHeaders.map((locationHeader, index) => {
            if (
              locationHeader.siteSection === "location__locationTwo-headerOne"
            ) {
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
          <InfoCard businessData={location} businessDataType="location" />
        </div>
        <div>Map Goes Here</div>
      </LocationLayout>
      <Section>
        <StyledHero
          css={{
            backgroundImage: `url('${location[0].locationImage.gatsbyImageData.images.fallback.src}')`,
          }}
        >
          {mainHeaders.map((heroHeader, index) => {
            if (heroHeader.siteSection === "location__locationTwo-headerTwo") {
              return (
                <HeadingContent
                  key={index}
                  textColor="white"
                  subHeaderContent={heroHeader.subheader}
                  mainHeaderContent={heroHeader.heading}
                  mainHeaderTag={heroHeader.elementTag}
                  paragraphContent={heroHeader.paragraphText.paragraphText}
                  buttonData={heroHeader?.buttonData?.buttonData}
                />
              )
            }
          })}
          <GatsbyImage
            image={location[0].locationImage.gatsbyImageData}
            css={tw`display[none] md:display[block] md:flex-[1.5]`}
          />
        </StyledHero>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulMainHeader(filter: { pageId: { eq: "locationTwo" } }) {
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
    allContentfulLocation(filter: { pageId: { eq: "locationTwo" } }) {
      nodes {
        title
        locationDetails {
          data {
            icon
            paragraphText
            tag
            title
          }
        }
        pageId
        paragraphText {
          paragraphText
        }
        locationImage {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default LocationOne

const StyledHero = tw.div`
flex
justify-between
align-items[center]
flex-wrap

md:bg-none!
`
const LocationLayout = tw.div`
flex
flex-col

md:flex-row
`
