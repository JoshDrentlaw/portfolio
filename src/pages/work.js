import React from 'react'
import SEO from "../components/seo"

import styled from 'styled-components'

import Layout, { Container } from '../components/layout'

import PennyHouse from '../images/pennyhouseweddings.png'
import EarthFarm from '../images/socalearthfarm.png'
import Wally from '../images/wallyracing.png'

const Img = styled.div`
    height: 0;
    margin: 0.5rem auto 0.5rem;
    padding-top: 56.25%;
    position: relative;
    width: calc(100% - 1rem);

    img {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`

const WorkItem = (props) => (
    <>
        <div className="large">
            <Img>
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <img src={props.src} alt={props.alt} />
                </a>
            </Img>
        </div>
        <div className="small">
            <p>Website for <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a></p>
            <p>{props.gatsby}</p>
            <p>{props.netlify}</p>
        </div>
    </>
)

const Work = () => {
    return (
        <Layout>
            <SEO title="JDWD | Work" description="Josh Drentlaw's web development work using the amazingly powerful GatsbyJS and Netlify platforms." />
            <Container>
                <WorkItem
                    alt="Image of the Penny House Weddings website."
                    gatsby="Uses Gatsby Image to source and lazy-load images. Sources video content from Vimeo."
                    name="Penny House Weddings"
                    netlify="Uses Netlify Forms. When the owner uploads videos to their Vimeo account, they appeaer on the website."
                    src={PennyHouse}
                    url="https://pennyhouseweddings.com"
                />
            </Container>
            <Container>
                <WorkItem
                    alt="Image of the Socal Earth Farm website."
                    gatsby="Uses Gatsby Image to source and lazy-load images."
                    name="Socal Earth Farm"
                    netlify="Uses NetlifyCMS to update delivery hours and entries in the FAQ. Uses Netlify Forms."
                    src={EarthFarm}
                    url="https://socalearthfarm.netlify.com"
                />
            </Container>
            <Container>
                <WorkItem
                    alt="Image of Wally Prankatz Racing School website"
                    gatsby="Uses Gatsby Image to source and lazy-load images."
                    name="Wally Prankatz Racing School"
                    netlify="Uses Netlify Forms."
                    src={Wally}
                    url="https://wallyracing.netlify.com"
                />
            </Container>
        </Layout>
    )
}

export default Work