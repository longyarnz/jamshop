/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Row, Col } from "../../Grid"

function HomepageExplore() {
  return (
    <section sx={styles.wrapper}>
      <Styled.h2 sx={styles.heading}>
        Explore community choices
      </Styled.h2>
      <Styled.p sx={styles.subText}>
        Updated daily based on most popular choices
        <br />
        among dev community
      </Styled.p>
    </section>
  )
}

export default HomepageExplore

const styles = {
  wrapper: {
    mt: 8
  },
  heading: {
    fontFamily: "body",
    fontWeight: "medium"
  },
  subText: {
    fontWeight: "200",
    color: "#fff"
  }
}