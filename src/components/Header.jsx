import React, { useState, useEffect } from "react"
import tw from "twin.macro"
import { Link } from "gatsby"
import NavMenu from "./NavMenu"

// Icons
import { IoLogoTux } from "react-icons/io"
import { FiMenu } from "react-icons/fi"
import { FaTimes } from "react-icons/fa"

function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", changeWidth)

    return () => {
      window.removeEventListener("resize", changeWidth)
    }
  }, [])

  return (
    <StyledHeader>
      <Logo to="/">
        <IoLogoTux size={80} />
      </Logo>
      {/* {(openMobileMenu || screenWidth > 768) && (
        <NavMenu screenWidth={screenWidth} openMobileMenu={openMobileMenu} />
      )} */}
      <NavMenu screenWidth={screenWidth} openMobileMenu={openMobileMenu} />
      {screenWidth < 767 && (
        <Hamburger onClick={() => setOpenMobileMenu(!openMobileMenu)}>
          {openMobileMenu === true ? (
            <FaTimes size={48} />
          ) : (
            <FiMenu size={48} />
          )}
        </Hamburger>
      )}
    </StyledHeader>
  )
}

export default Header

const StyledHeader = tw.nav`
flex
flex-row
justify-between
align-items[center]
px-8
py-6
bg-baseBgAlt
text-accentText
text-lg
shadow-md
relative

md:text-text
`
const Hamburger = tw.button`
z-50
text-primary
`

const Logo = tw(Link)`
z-50
text-primary
`
