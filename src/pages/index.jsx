import * as React from "react"
import Button from "../components/Atoms/Button"
import Icon from "../components/Atoms/Icon"
import MainHeader from "../components/Atoms/MainHeader"
import ParagraphText from "../components/Atoms/ParagraphText"
import SubHeader from "../components/Atoms/SubHeader"
import Layout from "../components/layout"
import CategoryCard from "../components/Molecules/CategoryCard"
import HeadingContent from "../components/Molecules/HeadingContent"

function Home() {
  const buttonData = {
    content: "Click Me",
    type: "primary",
    link: "breakfast-menu",
  }

  const buttonDataTwo = {
    content: "Click Me",
    type: "secondary",
    link: "lunch-menu",
  }

  return (
    <Layout>
      <HeadingContent
        subHeaderContent="This is a subheader"
        mainHeaderContent="This is the main header"
        mainHeaderTag="h1"
        paragraphContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod reprehenderit, quas natus quibusdam dignissimos quos libero obcaecati beatae magnam impedit neque iste unde sint dicta, doloremque quasi possimus id."
        buttonData={buttonData}
        buttonDataTwo={buttonDataTwo}
      />
      <CategoryCard />
    </Layout>
  )
}

export default Home
