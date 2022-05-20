import React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"

function Button({ content, type = "primary", link }) {
  let styledButton

  switch (type) {
    case "primary":
      styledButton = <PrimaryButton to={`${link}`}>{content}</PrimaryButton>
      break

    case "secondary":
      styledButton = <SecondaryButton to={`${link}`}>{content}</SecondaryButton>
      break

    case "alt":
      styledButton = <AltButton to={`${link}`}>{content}</AltButton>
      break

    default:
      break
  }

  return styledButton
}

export default Button

const PrimaryButton = tw(Link)`
// text-button
text-baseBgAlt
bg-primary
rounded-lg
px-3
py-2
transition 
duration-200
ease-out
mr-6

hover:ease-in
hover:bg-primaryVariant
hover:scale-150
`

const SecondaryButton = tw(Link)`
// text-button
text-primaryVariant
bg-baseBg
rounded-lg
px-3
py-2
transition 
duration-200
ease-out
underline

hover:bg-baseBgAlt
hover:text-primary
hover:scale-150
hover:ease-in
mr-6
`

const AltButton = tw(Link)`
relative
// text-button
text-primary
transition 
duration-200
ease-out
mr-6

before:w-10/12
before:bg-primary
before:h-0.5
before:absolute
before:bottom-0
// before:left-2/4

hover:text-primaryVariant
hover:md:before:bg-primaryVariant
hover:scale-150
hover:ease-in
`
