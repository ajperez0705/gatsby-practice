import React, { useState } from "react"
import tw from "twin.macro"
import { Link } from "gatsby"
import NavMenu from "./NavMenu"
import { IoLogoTux } from "react-icons/io"
import { FiMenu } from "react-icons/fi"

function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <StyledHeader>
      <Link to="/">
        <IoLogoTux size={36} />
      </Link>
      {openMobileMenu && (
        <NavMenu
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
      )}
      <button onClick={() => setOpenMobileMenu(!openMobileMenu)}>
        <FiMenu size={36} />
      </button>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = tw.nav`
flex
flex-row
justify-between
px-8
py-6
bg-baseBg
text-primary
text-lg
shadow-md
relative
`
