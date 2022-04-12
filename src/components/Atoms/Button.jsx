import React from "react"
import tw from "twin.macro"

function Button({ content, type = "primary", link }) {
  let styledButton

  switch (type) {
    case "primary":
      styledButton = <PrimaryButton href={`/${link}/`}>{content}</PrimaryButton>
      break

    case "secondary":
      styledButton = (
        <SecondaryButton href={`/${link}/`}>{content}</SecondaryButton>
      )
      break

    case "alt":
      styledButton = <AltButton href={`/${link}/`}>{content}</AltButton>
      break

    default:
      break
  }

  return styledButton
}

export default Button

const PrimaryButton = tw.a`
text-button
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

const SecondaryButton = tw.a`
text-button
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

const AltButton = tw.a`
relative
text-button
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
