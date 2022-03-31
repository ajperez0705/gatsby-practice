import React, { useState, useEffect } from "react"
import tw from "twin.macro"
import { Link } from "gatsby"
import NavMenu from "./NavMenu"
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
      <Link to="/">
        <IoLogoTux size={36} />
      </Link>
      {(openMobileMenu || screenWidth > 768) && (
        <NavMenu screenWidth={screenWidth} />
      )}

      {screenWidth < 767 && (
        <button onClick={() => setOpenMobileMenu(!openMobileMenu)}>
          {openMobileMenu === true ? (
            <FaTimes size={36} />
          ) : (
            <FiMenu size={36} />
          )}
        </button>
      )}
    </StyledHeader>
  )
}

export default Header

const StyledHeader = tw.nav`
flex
flex-row
justify-between
align-items[flex-start]
px-8
py-6
bg-baseBg
text-primary
text-lg
shadow-md
relative
`
