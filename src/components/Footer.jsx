import React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"
import { NavbarLocations } from "../data/NavbarLocations"

// Icons
import { IoLogoTux } from "react-icons/io"
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti"

function Footer() {
  return (
    <FooterContainer>
      <FooterTopSection>
        <FooterSectionContainer>
          <Logo to="/">
            <IoLogoTux css={tw`my-0 mx-auto mb-2`} size={80} />
          </Logo>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            repudiandae voluptate, cupiditate vero aspernatur cumque nisi modi
            praesentium ad minima blanditiis debitis reprehenderit quos?
            Explicabo reprehenderit quis doloribus odit veritatis.
          </p>
        </FooterSectionContainer>

        <FooterLocationSection>
          {NavbarLocations.map(location => {
            return (
              <div css={tw`mb-3`}>
                <LocationDetailsPText>
                  <h3>{location.title}</h3>
                </LocationDetailsPText>
                <LocationDetailsLinkText
                  href={`https://www.google.com/maps/search/?api=1&query=${location.address}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{location.addressOne}</span>
                  <br></br>
                  <span>{location.addressTwo}</span>
                </LocationDetailsLinkText>
                <LocationDetailsLinkText href={`tel:${location.phone}`}>
                  {location.phone}
                </LocationDetailsLinkText>
                <LocationDetailsLinkText href={`mailto:${location.email}`}>
                  {location.email}
                </LocationDetailsLinkText>
              </div>
            )
          })}
        </FooterLocationSection>
        <FooterSectionContainer>
          <h3 css={tw`mb-3`}>Subscribe to our newsletter</h3>
          <form action="submit">
            <input type="text" placeholder="Email Address" />
            <button>Submit</button>
          </form>
          <div css={tw`flex justify-center mb-3`}>
            <TiSocialFacebook size={40} />
            <TiSocialInstagram size={40} />
            <TiSocialLinkedin size={40} />
          </div>
        </FooterSectionContainer>
      </FooterTopSection>

      {/* Copyright Section */}
      <div>
        <p>&copy; {new Date().getFullYear()} Built by Company Name Here</p>
      </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = tw.div`
bg-primary
text-textAlt
text-center
px-8
py-6
`

const FooterSectionContainer = tw.div`
flex-1
mb-6
`

const FooterTopSection = tw.div`
flex
flex-direction[column]
justify-center
align-items[center]

md:flex-direction[row]
md:mb-6
`

const FooterLocationSection = tw.div`
flex-1

md:flex
md:justify-evenly
`

const Logo = tw(Link)`
z-50
`

const LocationDetailsPText = tw.p`
text-center
`
const LocationDetailsLinkText = tw(Link)`
display[block]
`
const FooterNav = tw.ul`

`
