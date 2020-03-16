import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/ProductPage/Hero"
import { Container } from "../components/Grid"

export default function ProductPage() {
  return (
    <Layout>
      <SEO title="Product" />
      <Container>
        <Hero />
      </Container>
    </Layout>
  )
}
