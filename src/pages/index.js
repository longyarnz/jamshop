import React from "react"

import Store from "../store"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import Explore from "../components/HomePage/Explore"
import { Container } from "../components/Grid"

export default function IndexPage() {
  return (
    <Store>
      <Layout>
        <SEO title="Home" />
        <Container>
          <Hero />
        </Container>
        <Container>
          <Explore />
        </Container>
      </Layout>
    </Store>
  )
}
