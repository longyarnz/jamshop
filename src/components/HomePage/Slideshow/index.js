/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Row } from "../../Grid"
import Card from "../Card"
import Dummy from "../../../images/products/dumy.svg"

function HomepageSlideshow() {
  return (
    <Row>
      <section sx={styles.wrapper}>
        <Card title="Great Dummy" src={Dummy} />
        <Card title="Basic Dummy" src={Dummy} />
        <Card title="Dummy X Pro" src={Dummy} />
        <Card title="Woooden Dummy" src={Dummy} />
      </section>
    </Row>
  )
}

export default HomepageSlideshow

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: ['column', , ,'row'],
    mt: 5
  }
}