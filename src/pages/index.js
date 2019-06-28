import React from 'react'
import SEO from "../components/seo"

import styled from 'styled-components'

import Layout, { Container } from '../components/layout'

import Gatsby from '../assets/svg/gatsbyjs-icon.inline.svg'
import Netlify from '../assets/svg/netlify-icon.inline.svg'
import Heart from '../assets/svg/heart.inline.svg'

const Heading = styled.h1`
    display: inline-flex;
    flex-direction: column;
    font-size: calc(40pt + (65 - 40) * (100vw - 300px) / (880 - 300));
    justify-content: start;
    line-height: calc(1em + (1.2 - 1.1) * (100vw - 300px) / (880 - 300));
    margin: 0;
    width: 100%;
`

const SubHeading = styled.p`
    font-size: 2em;
    text-align: center;
`

const H3 = styled.h3`
    font-size: 2em;
`

const Logos = styled.div`
    align-items: center;
    display: flex;
    height: 100px;
    justify-content: space-around;
    width: 100%;

    span {
        font-size: 3em;
        margin: 0.4em;
    }

    svg {
        width: 200px;
        height: 100px;
    }

    @media(min-width: 1024px) {
        flex-direction: column;
        height: calc(100% - 2em);
        width: 200px;

        svg {
            height: 200px;
        }
    }
`

const Index = () => {
    return (
        <Layout>
            <SEO title="Home | Josh Drentlaw Web Development" description="Get a lightning fast static site from Josh Drentlaw Web Developement using GatsbyJS and Netlify." />
            <Container heightLg="calc(100vh - (2em + 56px))" padding="2em 0 0">
                <Heading>
                    Build powerful static sites with GatsbyJS and Netlify.
                </Heading>
                <Logos>
                    <Gatsby />
                    <span>&#43;</span>
                    <Netlify />
                    <span>&#61;</span>
                    <Heart />
                </Logos>
            </Container>
            <SubHeading style={{ marginTop: '4em' }}>My name is Josh Drentlaw! I'm a front-end web developer in Riverside, CA. If your small to medium business or project needs a static site, look nowhere else!</SubHeading>
            <Container>
                <div className="small">
                    <H3>What is GatsbyJS?</H3>
                    <Gatsby style={{ height: `180px`}} />
                </div>
                <div className="large">
                    <p>GatsbyJS is a web framework that makes creating static websites extremely simple.</p>
                    <p>GatsbyJS hyper-fast and easy to upgrade and expand.</p>
                    <p>GatsbyJS offers hundreds of plugins that allow you to source content and data from just about anywhere.</p>
                    <p>GatsbyJS offers a lot out of the box, giving me more time to focus on your dream.</p>
                </div>
            </Container>
            <Container>
                <div className="small">
                    <H3>What is Netlify?</H3>
                    <Netlify style={{ height: `180px`}} />
                </div>
                <div className="large">
                    <p>Netlify is a (mostly) free web hosting platform.</p>
                    <p>Netlify makes it fast and easy to deploy changes to your website.</p>
                    <p>Netlify allows you to add fully functional forms in minutes.</p>
                    <p>With NetlifyCMS you can take full control of your site after it's built.</p>
                </div>
            </Container>
            <SubHeading>Together we will create the website of your dreams!</SubHeading>
        </Layout>
    )
}

export default Index