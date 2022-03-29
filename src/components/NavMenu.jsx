import React, { useState } from "react"
import tw from "twin.macro"
import { MobileMenuData } from "../data/MobileMenuData"
import { Link } from "gatsby"
import { FaTimes, FaChevronDown } from "react-icons/fa"

function NavMenu({ openMobileMenu, setOpenMobileMenu }) {
  const [showSubMenu, setShowSubMenu] = useState(false)

  return (
    <StyledMenu>
      <StyledUl>
        {MobileMenuData.map((item, index) => {
          return (
            <StyledLi key={index}>
              <StyledLink to={item.path}>
                {item.icon}
                <span>{item.title}</span>
                {item?.submenu.length > 0 && <FaChevronDown />}
              </StyledLink>
              {item?.submenu.length > 0 ? (
                <StyledSubmenu>
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
      <CloseButton onClick={() => setOpenMobileMenu(!openMobileMenu)}>
        <FaTimes size={36} />
      </CloseButton>
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
top-0
px-8
py-6
`

const StyledLink = tw(Link)`
flex
flex-row
align-items[center]
first:pr-8
`

const StyledUl = tw.ul`
relative
`

const StyledSubmenu = tw.ul`
// opacity[0]
// -translate-y-6
`

const StyledLi = tw.li`
`

const CloseButton = tw.button`
absolute
top-6
right-6
`
