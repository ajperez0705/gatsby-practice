import React from "react"
import Icon from "../Atoms/Icon"
import HeadingContent from "./HeadingContent"

function InfoCard() {
  return (
    <>
      <Icon />
      <HeadingContent
        mainHeaderContent="test"
        mainHeaderTag="h4"
        paragraphContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates id provident ducimus possimus itaque pariatur ut molestias optio nisi soluta! "
        alignment="center"
      />
    </>
  )
}

export default InfoCard
