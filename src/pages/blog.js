import React from 'react'
import SEO from "../components/seo"

import Layout, { Container } from '../components/layout'

import styled from 'styled-components'

const Blog = () => {
    return (
        <Layout>
            <SEO title="Blog | Josh Drentlaw Web Development" description="Personal blog for Josh Drentlaw of Josh Drentlaw Web Development. Josh Drentlaw writes about front-end web development, GatsbyJS, and Netlify." />
            <Container
                style={{
                    flexDirection: `column`,
                    margin: `0`,
                    textAlign: `center`
                }}
            >
                
            </Container>
        </Layout>
    )
}

export default Blog