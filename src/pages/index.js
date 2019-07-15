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
    margin: 4em 0;
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

const DetailList = styled.dl`
    margin: 2em 0;

    dt {
        font-size: 1.3em;
        margin: 0.7em 0 0.5em;
    }

    dd {
        margin-left: 0;
    }
`

const Index = () => {
    return (
        <Layout>
            <SEO
                title="Home | Josh Drentlaw Web Development"
                description="Get a lightning fast static site from Josh Drentlaw Web Developement using GatsbyJS and Netlify."
                keywords={[
                    "josh",
                    "drentlaw",
                    "josh drentlaw",
                    "web",
                    "design",
                    "development",
                    "developer",
                    "web design",
                    "web designer",
                    "web development",
                    "web developer",
                    "riverside",
                    "riverside web design",
                    "riverside web designer",
                    "riverside web development",
                    "riverside web developer",
                    "gatsby",
                    "gatsbyjs",
                    "netlify",
                    "static",
                    "site",
                    "static site",
                    "web site",
                    "cheap web site",
                    "cheap web site riverside",
                    "cheap static site",
                    "cheap static site riverside",
                    "wordpress",
                    "cheap wordpress",
                    "cheap wordpress site"
                ]}
            />
            <Container heightSm="calc(100vh - (2em + 56px))" heightLg="calc(100vh - (2em + 56px))" padding="2em 0 0">
                <Heading>
                    Get a powerful static site with GatsbyJS and Netlify.
                </Heading>
                <Logos>
                    <Gatsby />
                    <span>&#43;</span>
                    <Netlify />
                    <span>&#61;</span>
                    <Heart />
                </Logos>
            </Container>
            <SubHeading>My name is Josh Drentlaw! I'm a front-end web developer in Riverside, CA. If your small to medium business or project needs a static site, look nowhere else!</SubHeading>
            <Container margin="2em 0">
                <div className="small">
                    <H3>What is GatsbyJS?</H3>
                    <Gatsby style={{ height: `180px`}} />
                </div>
                <DetailList className="large">
                    <dt>Powerful Static Sites</dt>
                    <dd>GatsbyJS is a web framework that makes creating static websites extremely simple.</dd>
                    <dt>Performance and Enhancements</dt>
                    <dd>GatsbyJS static sites are hyper-fast and easy to upgrade and expand.</dd>
                    <dt>Data</dt>
                    <dd>GatsbyJS offers hundreds of plugins that allow you to source content and data from just about anywhere.</dd>
                    <dt>UX/DX</dt>
                    <dd>GatsbyJS offers a lot out of the box, giving me more time to focus on your dream.</dd>
                </DetailList>
                <button style={{ backgroundColor: "purple", padding: "1em"}}><a href="https://gatsbyjs.org">Learn more</a></button>
            </Container>
            <Container margin="2em 0">
                <div className="small">
                    <H3>What is Netlify?</H3>
                    <Netlify style={{ height: `180px`}} />
                </div>
                <DetailList className="large">
                    <dt>Hosting</dt>
                    <dd>Netlify is a web hosting platform with a powerful free tier and competitive pricing options.</dd>
                    <dt>Continuous Deployment</dt>
                    <dd>Netlify makes it fast and easy to deploy changes to your website.</dd>
                    <dt>Super Simple Forms</dt>
                    <dd>Netlify allows you to add fully functional forms in minutes.</dd>
                    <dt>Content Management</dt>
                    <dd>With NetlifyCMS you can take full control of your site after it's built.</dd>
                </DetailList>
            </Container>
            <SubHeading>An amazing website for your business is waiting just around the corner!</SubHeading>
        </Layout>
    )
}

export default Index