import * as React from "react"
import Header from "./header"
import { GlobalStyles } from "twin.macro"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  )
}

export default Layout
