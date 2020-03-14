/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Row } from "../../Grid"
import Card from "../Card"
import Dummy from "../../../images/products/dumy.svg"

function HomepageSlideshow() {
  return (
      <section sx={styles.wrapper}>
        <Card title="Great Dummy" src={Dummy} />
        <Card title="Basic Dummy" src={Dummy} />
        <Card title="Dummy X Pro" src={Dummy} />
        <Card title="Wooden Dummy" src={Dummy} />
      </section>
  )
}

export default HomepageSlideshow

const styles = {
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: ["column", , ,"row"],
    my: 6,
    mx: "0"
  }
}