import React from 'react'
import PropTypes from "prop-types"

import '../index.css'
import styled from 'styled-components'

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
    }
`

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