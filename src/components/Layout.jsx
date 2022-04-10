import * as React from "react"

import Header from "./Header"
import "./layout.css"
import { GlobalStyles } from "twin.macro"
import { Wrapper } from "./Wrapper"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />

      <Wrapper>{children}</Wrapper>

      <Footer />
    </>
  )
}

export default Layout
