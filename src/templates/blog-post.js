import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => {
    const post = data.markdownRemark
    
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <h3>Written by {post.frontmatter.author} on {post.frontmatter.date}</h3>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
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