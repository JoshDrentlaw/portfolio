import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"

import Layout, { Container } from '../components/layout'

/* import styled from 'styled-components' */

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allSanityPost(sort: { fields: publishedAt, order: DESC }) {
                totalCount
                edges {
                    node {
                        id
                        title
                        publishedAt(formatString: "DD MMMM, YYYY")
                        slug {
                            current
                        }
                        _rawBody
                    }
                }
            }
        }
    `)

    const posts = data.allSanityPost

    const limit = (...data) => {
        let string = data[0].children[0].text;
        if (string.length > 200) {
            return string.slice(0, 200) + "...";
        }
        else {
            return string;
        }
    }

    console.log(posts)

    return (
        <Layout>
            <SEO title="Blog | Josh Drentlaw Web Development" description="Personal blog for Josh Drentlaw of Josh Drentlaw Web Development. Josh Drentlaw writes about front-end web development, GatsbyJS, and Netlify." />
            <Container flexDirLg="column">
                <h1>Front-End Web Development Blog</h1>
                <h4>{posts.totalCount} Posts</h4>
                {posts.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link to={node.slug.current}>
                            <h3>{node.title}{" - "}{node.publishedAt}</h3>
                            <p style={{paddingLeft: '2em'}}>{limit(node._rawBody[0])}</p>
                        </Link>
                    </div>
                ))}
            </Container>
        </Layout>
    )
}

export default Blog