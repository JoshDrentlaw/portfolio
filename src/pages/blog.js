import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"

import Layout, { Container } from '../components/layout'

import styled from 'styled-components'

const Tag = styled.span`
    background-color: white;
    color: black;
    font-size: 10px;
    border-radius: 15px;
    padding: 5px 10px;
`

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allSanityPost(sort: { fields: publishedAt, order: DESC }) {
                totalCount
                edges {
                    node {
                        id
                        title
                        categories {
                            description
                            id
                            title
                        }
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

    return (
        <Layout>
            <SEO title="Blog" description="Personal blog for Josh Drentlaw of Josh Drentlaw Web Design. Josh Drentlaw writes about front-end web development, GatsbyJS, and Netlify." />
            <Container itemsSm="flex-start" flexDirLg="column">
                <h1>Front-End Web Development Blog</h1>
                <h4>{posts.totalCount} Posts</h4>
                {posts.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link to={`/blog/${node.slug.current}`}>
                            <h3>{node.title}{" - "}{node.publishedAt}</h3>
                        </Link>
                        <div>
                            {node.categories.map(tag => (
                                <Tag key={tag.id}>{tag.title}</Tag>
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </Layout>
    )
}

export default Blog