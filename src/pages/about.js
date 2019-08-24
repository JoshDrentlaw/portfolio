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

const P = styled.p`
    text-align: center;
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
                <P>My name is Josh Drentlaw, and I live in sunny Riverside, CA with my amazing wife.</P>
                <P>Web design started out as a fun hobby. I wanted to see how these web sites and apps were made, and what made them tick.</P>
                <P>Now 5 or so years have flown by, and I've learned so much about a lot of different technologies. The biggest thing I've learned is that you never stop learning.</P>
                <P>My goal as a website desginer and developer is to make amazing products for people, and give them something special and their own. I also want to make the web a more open and caring space for everyone.</P>
                <P>Besides building websites I enjoy playing PC games and playing D&D with my friends. It's a great hobby that lets you create amazing stories with your friends.</P>
            </Container>
        </Layout>
    )
}

export default About