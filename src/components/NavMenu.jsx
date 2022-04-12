import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { MobileMenuData } from "../data/MobileMenuData"
import { NavbarLocations } from "../data/NavbarLocations"
import { Link } from "gatsby"
import { FaChevronDown } from "react-icons/fa"

function NavMenu({ screenWidth, openMobileMenu }) {
  const [selected, setSelected] = useState("")

  return (
    <StyledMenu
      css={
        openMobileMenu
          ? { left: 0, transition: "all ease 0.5s" }
          : { left: "-100%", transition: "all ease 0.5s" }
      }
    >
      <StyledUl>
        {MobileMenuData.map((item, index) => {
          return (
            <StyledLi
              key={index}
              // This is for mobile
              onClick={
                item?.submenu.length > 0 && screenWidth < 767
                  ? () => setSelected(selected !== index ? index : "")
                  : null
              }
            >
              <StyledLink to={item.path}>
                {screenWidth < 767 && (
                  <MobileMenuIcon>{item.icon}</MobileMenuIcon>
                )}
                <span>{item.title}</span>
                {item?.submenu.length > 0 && <FaChevronDown />}
              </StyledLink>
              {(item?.submenu.length > 0 && screenWidth > 768) ||
              (item?.submenu.length > 0 && selected === index) ? (
                <StyledSubmenu screenWidth={screenWidth} selected={selected}>
                  {item.submenu.map(subLink => (
                    <SubmenuLi key={subLink.title}>
                      <Link to={subLink.path}>{subLink.title}</Link>
                    </SubmenuLi>
                  ))}
                </StyledSubmenu>
              ) : null}
            </StyledLi>
          )
        })}
      </StyledUl>
      <div>
        {screenWidth < 767 &&
          NavbarLocations.map(location => {
            return (
              <LocationContainer id={location.id}>
                <LocationDetailsPText>
                  <MobileMenuIcon>{location.icon}</MobileMenuIcon>
                  <span>{location.title}</span>
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
              </LocationContainer>
            )
          })}
      </div>
    </StyledMenu>
  )
}

export default NavMenu

const StyledMenu = tw.div`
flex
flex-col
justify-between
bg-textAlt
absolute
w-screen
h-screen
top-0
px-8
py-6
z-10
rounded-3xl
// -left-full
transition
ease-in
delay-150

// After 768px
md:static
md:w-auto
md:flex-row
md:px-0
md:py-0
md:h-auto
md:bg-baseBgAlt

`
const StyledUl = tw.ul`
relative
mt-28

// After 768px
md:w-auto
md:flex
md:flex-row
md:mt-0
`

const StyledLink = tw(Link)`
flex
flex-row
align-items[center]
relative
text-xl


md:first:pr-8
md:w-auto
md:flex-row
`
const MobileMenuIcon = tw.span`
mr-2
fill-current
text-primary
`

const LocationContainer = tw.div`
width[85%]
mb-6
`

const LocationDetailsPText = tw.p`
display[flex]
align-items[center]
`
const LocationDetailsLinkText = tw(Link)`
display[block]
`

const StyledLi = styled.li.attrs({ className: "group" })`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`

const StyledSubmenu = ({ screenWidth, selected, children }) => (
  <ul
    css={[
      // Not Mobile
      screenWidth > 768 &&
        tw`
      invisible
      opacity-0
      transition
      ease-in
      delay-150
      rounded-lg
      absolute
      top-6
      pt-4

      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      group-hover:bg-primaryVariantTransparent
      py-6
      px-4
      `,

      // Mobile
      screenWidth < 767 &&
        selected === "" &&
        tw`
        opacity-0
        border-l-2
        ml-10
        w-7/12
        rounded-r-lg
        transition
        ease-in
        delay-150
        h-0
      `,

      screenWidth < 767 &&
        selected !== "" &&
        tw`
        opacity-100
        border-l-2
        ml-10
        w-7/12
        rounded-r-lg
        h-full
        transition
        ease-in
        delay-150
        `,
    ]}
  >
    {children}
  </ul>
)

const SubmenuLi = tw.li`
my-2
pl-5
display[block]

md:mt-0
md:pl-0
`
