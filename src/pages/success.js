import React from 'react'
import { Link } from 'gatsby'
import SEO from "../components/seo"

import Layout, { Container } from '../components/layout'

import styled from 'styled-components'

const H1 = styled.h1`
    font-size: calc(1.5em + (5 - 1.5) * (100vw - 300px) / (880 - 300));
    text-align: center;
    margin-bottom: 4em;
`

const Button = styled.button`
    background-color: #00000000;
    border: 2px solid white;
    border-radius: 5px;
    width: 230px; height: 70px;

    &:hover {
        background-color: white;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: 100%; height: 100%;
    }
`

const Services = ({ location }) => {
    let fullname, service
    if (location.hasOwnProperty('state')) {
        if (location.state.hasOwnProperty('fullname') && location.state.hasOwnProperty('service'))
        fullname = location.state.fullname
        service = location.state.service
    }

    return (
        <Layout>
            <SEO title="Services" description="I offer many services to get your website off the ground right." />
            <Container flexDirLg="column">
                <H1>{`${fullname}, ` || 'Valued customer, '}thank you for your interest in {`${service}` || 'Josh Drentlaw Web Design'}! I will be in touch with you as soon as I can. In the meantime, please check out my blog by clicking the link below. Have a great day!</H1>
                <Button type="button"><Link to="/blog/">Blog</Link></Button>
            </Container>
        </Layout>
    )
}

export default Services