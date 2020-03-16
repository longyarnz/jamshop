/** @jsx jsx */
import { jsx } from "theme-ui"
import { Row, Col } from "../../Grid"

import ProductImage from "../../../images/products/dumy.svg"

function ProductpageHero() {
  return (
    <section sx={styles.wrapper}>
      <Row styles={{ justifyContent: ["center"] }}>
        <Col styles={styles.imgWrapper}>
          <img src={ProductImage} alt="Product" />
        </Col>
        <Col styles={styles.leadWrapper}>
          <div>
            <span>POPULAR</span>
            <h2>Wooden Dummy</h2>
            <p>Something that you trully need, but haven’t know about it yet. Multiple winner of Community Awarads. </p>
            <h4>$104.99</h4>
            <button sx={styles.checkout}>
              Add To Cart
            </button>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default ProductpageHero

const styles = {
  wrapper: {
    height: "calc(100vh - 50px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  imgWrapper: {
    width: ["70%", "1", "2/5", null, 480],
    textAlign: ["center", "center", "left"],
    order: [2, 2, 1],
    "& > img": {
      maxWidth: "1",
      width: "1"
    }
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
      lineHeight: 1.5
    }
  },
  checkout: {
    width: "150px",
    height: "45px",
    backgroundColor: "accent",
    border: "none",
    color: "#fff",
    alignSelf: "flex-end",
    borderRadius: "4px",
    cursor: "pointer",
    transition: 'all ease .25s',
    fontFamily: "body",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#f8af23",
      outline: 'none',
    },
    "&:active": {
      backgroundColor: "accent",
      outline: "none"
    },
    "&:focus": {
      outline: "none"
    }
  }
}
