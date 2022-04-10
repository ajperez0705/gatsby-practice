import * as React from "react"
import Button from "../components/Global/Button"
import MainHeader from "../components/Global/MainHeader"
import ParagraphText from "../components/Global/ParagraphText"
import SubHeader from "../components/Global/SubHeader"
import Layout from "../components/layout"

const Home = () => (
  <Layout>
    <SubHeader content="Testing" />
    <MainHeader content="Main Header" tag="h1" />
    <ParagraphText content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde consequatur magni facilis ut nam eos neque quae nesciunt est, totam omnis mollitia, necessitatibus autem, dolorem aperiam ea at consectetur libero." />
    <Button content="Click Me" type="primary" link="about" />
    <Button content="Click Me" type="secondary" link="about" />
    <Button content="Click Me" type="alt" link="about" />
  </Layout>
)

export default Home
