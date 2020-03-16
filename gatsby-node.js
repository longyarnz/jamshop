const path = require("path")

exports.createPages = async({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const component = path.resolve("src/templates/productTemplate.js")
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              name
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { name } = node.frontmatter
    if (!name) return

    const path = `/products/${name.replace(/\s/g, "_").toLowerCase()}`
    createPage({ path, component, context: { name } })
  })
}
