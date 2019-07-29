import React from 'react'
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import Layout, { Container } from '../components/layout'

import styled from 'styled-components'

const Pic = styled(Img)`
    border-radius: 10px;
    min-height: 200px;
    min-width: 150px;
`

const About = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "me.png"}) {
                childImageSharp {
                    fixed(width: 150, height: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="About" description="Get to know Josh Drentlaw a little bit. He does more than just code websites." />
            <Container padding="2em 0" heightLg="60vh" flexDirLg="column">
                <Pic fixed={data.file.childImageSharp.fixed} alt="Front profile of Josh Drentlaw" />
                <a href="https://github.com/JoshDrentlaw" target="_blank" rel="noopener noreferrer" style={{ marginTop: `1em` }}>GitHub</a>
                <h1>A Little About Me</h1>
                <p>My name is Josh Drentlaw, and I live in Riverside, CA.</p>
                <p>After working in warehouses for most of my life, I decided I needed to make a change.</p>
                <p>I've been learning to develope websites for a few years, and I'm absolutely hooked!</p>
                <p>Besides building websites I enjoy playing PC games and playing D&D with my friends.</p>
                <p>I'm also slowly working on a computer science degree while I work.</p>
            </Container>
        </Layout>
    )
}

export default About