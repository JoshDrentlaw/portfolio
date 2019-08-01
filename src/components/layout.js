import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from "prop-types"

import '../index.css'
import styled from 'styled-components'

import Facebook from '../assets/svg/facebook.inline.svg'
import Maps from '../assets/svg/maps.inline.svg'

import Header from "./header"
import Footer from './footer'

const Body = styled.div`
    background-image: linear-gradient(135deg, #021525, #052644, #053658, #112e42,#112425);
    color: white;
    font-family: sans-serif;
    min-height: 100vh;
    overflow: auto;
`

const Main = styled.main`
    box-sizing: border-box;
    height: 100%;
    min-height: calc(100vh - 112px);
    margin: 0 auto;
    padding: 0 2em;
    width: 100%;

    @media(min-width: 1024px) {
        width: 65%;
        padding: 2em;
    }

    @media(min-Width: 1680px) {
        width: 50%;
    }
`

export const Container = styled.section`
    align-items: center;
    display: flex;
    height: ${props => props.heightSm || 'auto'};
    flex-direction: ${props => props.flexDirSm || 'column'};
    justify-content: center;
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    width: 100%;

    a {
        color: white;
        font-weight: 700;

        &:link {
            color: white;
            font-weight: 700;
        }
        
        &:hover {
            color: red;
        }
    }

    .small, .large {
        text-align: center;
        width: 100%;
    }

    @media(min-width: 1024px) {
        flex-direction: ${props => props.flexDirLg || 'row'};
        height: ${props => props.heightLg || '40vh'};
        justify-content: ${props => props.justifyLg || 'center'};

        .small {
            text-align: left;
            width: 35%;
        }

        .large {
            text-align: left;
            width: 50%;
        }

        button {
            margin-left: 50px;
        }
    }
`

const SocialWrapper = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    svg {
        color: white;
        fill: currentColor;
    }
`

export const Socials = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "yelp.png"}) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <SocialWrapper className="pl-px2 w-1/2">
            <a href="https://www.facebook.com/jdwebdev" target="_blank" rel="noopener noreferrer">
                <Facebook />
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
                <Maps />
            </a> */}
            <a href="https://www.yelp.com/biz/josh-drentlaw-web-design-riverside-2" target="_blank" rel="noopener noreferrer">
                <Img fixed={data.file.childImageSharp.fixed} alt="Yelp company logo" />
            </a>
        </SocialWrapper>
    )
}

function Layout({ children }) {
    return (
        <Body>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Body>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout