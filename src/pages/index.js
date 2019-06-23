import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import styled from 'styled-components'

import { Container } from '../components/layout'

import Gatsby from '../images/gatsbyjs-icon.svg'
import Netlify from '../images/netlify-icon.svg'
import Heart from '../images/heart.svg'

const Heading = styled.h1`
    align-self: start;
    display: inline-flex;
    flex-direction: column;
    font-size: 3.4em;
    height: calc(100% - 2em);
    justify-content: start;
    margin: 0;
    width: 100%;

    @media(min-width: 768px) {
        font-size: 4.1em;
    }

    @media(min-width: 1024px) {
        font-size: 4.8em;
    }

    @media(min-width: 1680px) {
        font-size: 5.5em;
    }
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
    height: calc(100% - 2em);
    justify-content: space-around;
    padding: 1em;
    width: 100%;

    span {
        font-size: 3em;
        margin: 0.4em;
    }

    @media(min-width: 1024px) {
        flex-direction: column;
        width: auto;
    }
`

const Index = () => {
    return (
        <>
            <Helmet>
                <title>JDWD | Home</title>
                <meta name="description" content="Get a lightning fast static site from Josh Drentlaw Web Developement using GatsbyJS and Netlify." />
            </Helmet>
            <Container style={{
                height: `calc((100vh - 4em) - 56px)`,
                margin: `0.75em 0`,
                padding: `0`
            }}>
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
                    <Gatsby />
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
                    <Netlify />
                </div>
                <div className="large">
                    <p>Netlify is a (mostly) free web hosting platform.</p>
                    <p>Netlify makes it fast and easy to deploy changes to your website.</p>
                    <p>Netlify allows you to add fully functional forms in minutes.</p>
                    <p>With NetlifyCMS you can take full control of your site after it's built.</p>
                </div>
            </Container>
            <SubHeading>Together we will create the website of your dreams!</SubHeading>
        </>
    )
}

export default Index