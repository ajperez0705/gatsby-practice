import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { MobileMenuData } from "../data/MobileMenuData"
import { Link } from "gatsby"
import { FaTimes, FaChevronDown } from "react-icons/fa"

function NavMenu({ screenWidth }) {
  const [selected, setSelected] = useState("")

  return (
    <StyledMenu>
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
                {item.icon}
                <span>{item.title}</span>
                {item?.submenu.length > 0 && <FaChevronDown />}
              </StyledLink>
              {(item?.submenu.length > 0 && screenWidth > 768) ||
              (item?.submenu.length > 0 && selected === index) ? (
                <StyledSubmenu screenWidth={screenWidth}>
                  {item.submenu.map(subLink => (
                    <li key={subLink.title}>
                      <Link to={subLink.path}>{subLink.title}</Link>
                    </li>
                  ))}
                </StyledSubmenu>
              ) : null}
            </StyledLi>
          )
        })}
      </StyledUl>
    </StyledMenu>
  )
}

export default NavMenu

const StyledMenu = tw.div`
flex
flex-col
bg-baseBg
absolute
w-screen
h-screen
right-0
top-20
px-8
py-6

// After 768px
md:static
md:w-auto
md:flex-row
md:px-0
md:py-0
md:h-auto

`
const StyledUl = tw.ul`
relative

// After 768px
md:w-auto
md:flex
md:flex-row
`

const StyledLink = tw(Link)`
flex
flex-row
align-items[center]
relative
first:pr-8

md:w-auto
md:flex-row
`

const StyledLi = styled.li.attrs({ className: "group" })`
  padding-bottom: 5px;
`

const StyledSubmenu = ({ screenWidth, showSubMenu, children }) => (
  <ul
    css={[
      screenWidth > 768 &&
        tw`
      invisible
      opacity-0
      transition-all
      delay-150
      rounded-lg
      absolute
      top-8

      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      group-hover:bg-primaryVariant
      py-6
      px-4
      `,

      screenWidth < 767 &&
        tw`
        display[block]
      `,
    ]}
  >
    {children}
  </ul>
)
