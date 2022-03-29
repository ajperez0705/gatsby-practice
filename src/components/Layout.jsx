import * as React from "react"

import Header from "./Header"
import "./layout.css"
import { GlobalStyles } from "twin.macro"
import { Wrapper } from "./Wrapper"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />

      <Wrapper>{children}</Wrapper>
    </>
  )
}

export default Layout
