import React from 'react'
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'

import Layout, { Container } from '../components/layout'

const WorkContainer = styled(Container)`
    justify-content: center;
    font-size: calc(16pt * (100vw - 300px) / (880 - 300));
    margin: 1em 0;

    @media(min-width: 1024px) {
        justify-content: space-between;
    }
`

const ImgContainer = styled.div`
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
            <ImgContainer>
                <p>Website for <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a></p>
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <Img fluid={props.src} alt={props.alt} />
                </a>
            </ImgContainer>
        </div>
        <div className="small">
            <p>{props.gatsby}</p>
            <p>{props.netlify}</p>
        </div>
    </>
)

const Work = () => {
    const data = useStaticQuery(graphql`
        {
            pennyhouseweddings:file(relativePath: {eq: "pennyhouseweddings.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            socalearthfarm: file(relativePath: {eq: "socalearthfarm.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            wallyracing: file(relativePath: {eq: "wallyracing.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="Work" description="Josh Drentlaw's web development work using the amazingly powerful GatsbyJS and Netlify platforms." />
            <WorkContainer style={{ marginTop: `0`, paddingTop: `0` }}>
                <WorkItem
                    alt="Image of the Penny House Weddings website."
                    gatsby="Uses Gatsby Image to source and lazy-load images. Sources video content from Vimeo."
                    name="Penny House Weddings"
                    netlify="Uses Netlify Forms. When the owner uploads videos to their Vimeo account, they appeaer on the website."
                    src={data.pennyhouseweddings.childImageSharp.fluid}
                    url="https://pennyhouseweddings.com"
                />
            </WorkContainer>
            <h2 style={{ textAlign: "center", textDecoration: "underline", margin: "2em 0 1em"}}>Coming Soon</h2>
            <WorkContainer>
                <WorkItem
                    alt="Image of the Socal Earth Farm website."
                    gatsby="Uses Gatsby Image to source and lazy-load images."
                    name="Socal Earth Farm"
                    netlify="Uses NetlifyCMS to update delivery hours and entries in the FAQ. Uses Netlify Forms."
                    src={data.socalearthfarm.childImageSharp.fluid}
                    url="https://socalearthfarm.netlify.com"
                />
            </WorkContainer>
            <WorkContainer>
                <WorkItem
                    alt="Image of Wally Prankatz Racing School website"
                    gatsby="Uses Gatsby Image to source and lazy-load images."
                    name="Wally Prankatz Racing School"
                    netlify="Uses Netlify Forms."
                    src={data.wallyracing.childImageSharp.fluid}
                    url="https://wallyracing.netlify.com"
                />
            </WorkContainer>
        </Layout>
    )
}

export default Work