import React from "react"
import tw from "twin.macro"
import { FaHamburger, FaHeart } from "react-icons/fa"

function Icon({ icon = "heart", size = 36 }) {
  let chosenIcon

  switch (icon) {
    case "food":
      chosenIcon = <FaHamburger size={size} />
      break

    default:
      chosenIcon = <FaHeart size={size} />
      break
  }

  return <StyledIcon className="styled-icon">{chosenIcon}</StyledIcon>
}

export default Icon

const StyledIcon = tw.div`
text-primary
pb-2
text-center

md:text-left
`
