/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Card from "../Card"
import Dummy from "../../../images/products/dumy.svg"

function HomepageSlideshow() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    mobileFirst: true
  }

  return (
    <section sx={styles.wrapper}>
      <Slider {...settings}>
        <Card title="Great Dummy" src={Dummy} />
        <Card title="Basic Dummy" src={Dummy} />
        <Card title="Dummy X Pro" src={Dummy} />
        <Card title="Wooden Dummy" src={Dummy} />
        <Card title="Basic Dummy" src={Dummy} />
        <Card title="Dummy X Pro" src={Dummy} />
        <Card title="Wooden Dummy" src={Dummy} />
      </Slider>
    </section>
  )
}

export default HomepageSlideshow

function useQuery() {
  let data = useStaticQuery(
    graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              name
              excerpt
            }
          }
        }
      }
    }
    `
  )

  data = data.allMarkdownRemark.edges.map(({ node }) => {
    const { name, excerpt, id } = node.frontmatter
    if (!name) return
    else {
      return (
        <Card key={id} title={name} summary={excerpt} src={Dummy} />
      )
    }
  })

  return data
}

const styles = {
  wrapper: {
    width: "100%",
    my: 6,
    mx: "0",
    "& .slick-track": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    "& .slick-initialized .slick-slide": {
      width: "5% !important"
    },
    "& .slick-arrow": {
      transform: "scale(3)"
    },
    "& .slick-next": {
      right: "-7%",
    },
    "& .slick-prev": {
      left: "-7%",
    }
  }
}