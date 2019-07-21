const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'SanityPost') {
        const slug = createFilePath({ node, getNode, basePath: `pages/blog` })
        createNodeField({
            node,
            name: `slug`,
            value: `blog${slug}`,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
        {
            allSanityPost {
                edges {
                    node {
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `)
    .then(result => {
        result.data.allSanityPost.edges.forEach(({ node }) => {
            createPage({
                path: `${node.slug.current}`,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug: `${node.slug.current}`,
                },
            })
        })
    })
}