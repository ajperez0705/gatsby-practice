import * as React from "react"
import Layout from "../components/layout"
import { TestButton } from "../components/testButton"

const Home = () => (
  <Layout>
    <h1>Home Page</h1>
    <p>Hello</p>
    <TestButton onClick={() => console.log("hello world")}>Click Me</TestButton>
  </Layout>
)

export default Home
