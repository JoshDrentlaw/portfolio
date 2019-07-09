import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import styled from 'styled-components'

const Body = styled.main`
    a {
        color: white;
        font-weight: 600;

        &:hover, &:visited {
            color: red;
        }
    }
`

export default ({ data }) => {
    const post = data.markdownRemark
    
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <h3>Written by {post.frontmatter.author} on {post.frontmatter.date}</h3>
                <Body dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                author
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }
`