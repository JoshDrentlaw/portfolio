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
    text-align: center;
`

const ImgContainer = styled.div`
    width: 100%;

    @media(min-width: 1024px) {
        width: 60%;
    }

    img {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`

const WorkItem = (props) => (
    <ImgContainer>
        <p>Website for <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a></p>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <Img fluid={props.src} alt={props.alt} />
        </a>
        {
            props.blog ?
            <a style={{ display: 'block', marginTop: '2em' }} href={`/blog/${props.blog}`}>Blog Post</a>
            :
            null
        }
    </ImgContainer>
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
            unitedpoolservice: file(relativePath: {eq: "unitedpoolservice.png"}) {
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
            <SEO title="Work" description="It iew Josh Drentlaw's web design work here." />
            <WorkContainer>
                <WorkItem
                    alt="Penny House Weddings' website."
                    name="Penny House Weddings"
                    src={data.pennyhouseweddings.childImageSharp.fluid}
                    url="https://pennyhouseweddings.com"
                    blog="penny-house-weddings"
                />
            </WorkContainer>
            <WorkContainer>
                <WorkItem
                    alt="United Pool Service's website"
                    name="United Pool Service"
                    src={data.unitedpoolservice.childImageSharp.fluid}
                    url="https://www.unitedpoolservice.com"
                    blog="united-pool-service"
                />
            </WorkContainer>
            <h2 style={{ textAlign: "center", textDecoration: "underline", marginTop: "4em"}}>Coming Soon</h2>
            {/* <WorkContainer>
                <WorkItem
                    alt="Socal Earth Farm's website."
                    gatsby="Uses Gatsby Image to source and lazy-load images."
                    name="Socal Earth Farm"
                    netlify="Uses NetlifyCMS to update delivery hours and entries in the FAQ. Uses Netlify Forms."
                    src={data.socalearthfarm.childImageSharp.fluid}
                    url="https://socalearthfarm.netlify.com"
                />
            </WorkContainer> */}
            <WorkContainer>
                <WorkItem
                    alt="Wally Prankatz Racing School website"
                    name="Wally Prankatz Racing School"
                    src={data.wallyracing.childImageSharp.fluid}
                    url="https://wallyracing.netlify.com"
                />
            </WorkContainer>
        </Layout>
    )
}

export default Work