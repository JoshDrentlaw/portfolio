import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'

import Layout from '../components/layout'

import styled from 'styled-components'

const Body = styled(BlockContent)`
    a {
        color: white;
        font-weight: 600;

        &:hover, &:visited {
            color: red;
        }
    }
`

export default ({ data }) => {
    const post = data.sanityPost

    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
                <h3>Written by {post.author.name} on {post.publishedAt}</h3>
                <Img fluid={post.mainImage.asset.fluid} />
                <Body blocks={post._rawBody} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        sanityPost(slug: {current: { eq: $slug }}) {
            author {
                name
            }
            title
            publishedAt(formatString: "MMMM DD, YYYY")
            _rawBody
            mainImage {
                asset {
                    fluid(maxHeight: 300, toFormat: WEBP) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
`