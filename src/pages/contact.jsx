import React from "react"

// Styles
import tw from "twin.macro"

// Tools
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

// Components
import HeadingContent from "../components/Molecules/HeadingContent"
import Layout from "../components/layout"

function Contact() {
  const data = useStaticQuery(query)

  const {
    allContentfulMainHeader: { nodes: mainHeaders },
    allContentfulPageImages: { nodes: image },
  } = data

  console.log(image[0].images[0].gatsbyImageData)

  return (
    <Layout>
      <ContactContainer>
        <StyledHero
          css={{
            backgroundImage: `url('${image[0].images[0].gatsbyImageData.images.fallback.src}')`,
          }}
        >
          {mainHeaders.map((heroHeader, index) => {
            if (heroHeader.siteSection === "contact__contact-header") {
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
          {/* <GatsbyImage
          image={image[0].images[0].gatsbyImageData}
          css={tw`display[none] md:display[block] md:flex-[1.5]`}
        /> */}
        </StyledHero>
        <form action="submit">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <textarea name="message" id="test" cols="30" rows="10" />
        </form>
      </ContactContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulMainHeader(filter: { pageId: { eq: "contact" } }) {
      nodes {
        elementTag
        pageId
        paragraphText {
          paragraphText
        }
        siteSection
        subheader
        heading
      }
    }
    allContentfulPageImages(filter: { title: { eq: "Contact Page Images" } }) {
      nodes {
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          title
        }
      }
    }
  }
`

export default Contact

const ContactContainer = tw.div`
flex
justify-between
align-items[center]
flex-wrap
h-full
`

const StyledForm = tw.form`
flex-1
`

const StyledHero = tw.div`
flex-1
`
