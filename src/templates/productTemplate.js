/** @jsx jsx */
import { useContext, useState } from "react"
import { graphql } from "gatsby"
import { jsx } from "theme-ui"
import { Row, Col, Container } from "../components/Grid"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { CartContext } from "../store"

import ProductImage from "../images/products/dumy.svg"

function Productpage({ data }) {
  const [added, setAdded] = useState(false)
  const [, dispatch] = useContext(CartContext)
  const { markdownRemark } = data
  const { name, tag, description, price } = markdownRemark.frontmatter
  const text = added ? "Added" : "Add To Cart"
  styles.checkout.backgroundColor = added ? "green !important" : "accent"
  const addProduct = () => {
    setAdded(true)
    dispatch({
      type: "ADD",
      item: { name, price },
    })
    setTimeout(() => setAdded(false), 3000)
  }

  return (
    <Layout>
      <SEO title="Product" />
      <Container>
        <section sx={styles.wrapper}>
          <Row styles={{ justifyContent: ["center"] }}>
            <Col styles={styles.imgWrapper}>
              <img src={ProductImage} alt="Product" />
            </Col>
            <Col styles={styles.leadWrapper}>
              <div>
                <span>{tag}</span>
                <h2>{name}</h2>
                <p>{description}</p>
                <h4>${price}</h4>
                <button sx={styles.checkout} onClick={addProduct}>
                  {text}
                </button>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </Layout>
  )
}

export default Productpage

export const pageQuery = graphql`
  query($name: String!) {
    markdownRemark(frontmatter: {name: { eq: $name }}) {
      frontmatter {
        name
        tag
        description
        price
      }
    }
  }
`

const styles = {
  wrapper: {
    height: "calc(100vh - 50px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgWrapper: {
    width: ["70%", "1", "2/5", null, 480],
    textAlign: ["center", "center", "left"],
    order: [2, 2, 1],
    "& > img": {
      maxWidth: "1",
      width: "1",
    },
  },
  leadWrapper: {
    width: ["1", "1", "2/5", null, 450],
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    order: [1, 1, 2],
    mb: ["65px", "65px", 0],
    ml: ["auto", 0, 0, 0, 0, 100],
    "& span": {
      fontFamily: "Roboto",
      fontSize: "2",
      color: "#FBE067",
      textTransform: "uppercase",
    },
    "& h2": {
      fontFamily: "Roboto",
      fontWeight: "600",
      fontSize: "6",
      color: "white",
    },
    "& h4": {
      fontFamily: "Roboto",
      fontWeight: "600",
      fontSize: "22px",
      color: "white",
    },
    "& p": {
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontSize: "18px",
      color: "light",
      lineHeight: 1.5,
    },
  },
  checkout: {
    width: "150px",
    height: "45px",
    border: "none",
    color: "#fff",
    alignSelf: "flex-end",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all ease .25s",
    fontFamily: "body",
    fontWeight: "bold",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#f8af23",
      outline: "none",
    },
    "&:active": {
      backgroundColor: "accent",
      outline: "none",
    },
    "&:focus": {
      outline: "none",
    },
  },
}
