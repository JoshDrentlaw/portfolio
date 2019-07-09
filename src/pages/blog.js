import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"

import Layout, { Container } from '../components/layout'

/* import styled from 'styled-components' */

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                totalCount
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString: "DD MMMM, YYYY")
                        }
                        fields {
                            slug
                        }
                        excerpt
                    }
                }
            }
        }
    `)

    const posts = data.allMarkdownRemark

    return (
        <Layout>
            <SEO title="Blog | Josh Drentlaw Web Development" description="Personal blog for Josh Drentlaw of Josh Drentlaw Web Development. Josh Drentlaw writes about front-end web development, GatsbyJS, and Netlify." />
            <Container flexDirLg="column">
                <h1>Front-End Web Development Blog</h1>
                <h4>{posts.totalCount} Posts</h4>
                {posts.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link to={node.fields.slug}>
                            <h3>{node.frontmatter.title}{" - "}{node.frontmatter.date}</h3>
                            <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))}
            </Container>
        </Layout>
    )
}

export default Blog