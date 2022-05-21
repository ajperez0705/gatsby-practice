import React, { useState, useEffect } from "react"

import Header from "./Header"
import "./layout.css"
import { GlobalStyles } from "twin.macro"
import { Wrapper } from "./Wrapper"
import Footer from "./Footer"

const Layout = ({ children }) => {
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

  // This function allows for props to be passed to children within the Layout component
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      screenWidth: screenWidth,
    })
  )

  return (
    <>
      <GlobalStyles />
      <Header screenWidth={screenWidth} />
      <Wrapper>{childrenWithProps}</Wrapper>
      <Footer />
    </>
  )
}

export default Layout
