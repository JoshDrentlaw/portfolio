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
            const path = `/blog/${node.slug.current}`
            createPage({
                path,
                component: require.resolve(`./src/templates/blog-post.js`),
                context: { slug: node.slug.current, },
            })
        })
    })
}