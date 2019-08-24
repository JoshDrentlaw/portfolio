import React from 'react'
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'

import Layout, { Container } from '../components/layout'

const Heading = styled.h1`
    display: inline-flex;
    flex-direction: column;
    font-size: calc(35px + (50 - 35) * (100vw - 300px) / (880 - 300));
    justify-content: center;
    line-height: calc(1em + (1.2 - 1.1) * (100vw - 300px) / (880 - 300));
    margin: 0;
    text-align: center;
    width: 100%;
`

const H2 = styled.h2`
    font-size: calc(35px + (50 - 35) * (100vw - 300px) / (880 - 300));
    margin: 0.25em 0;
    text-align: center;
`

const H3 = styled.h3`
    font-size: 2em;
`

const BlockText = styled.p`
    font-size: calc(1.3em + (2 - 1.3) * (100vw - 300px) / (880 - 300));
    margin: 2em 0 4em;
    text-align: ${props => props.align || 'center'};
`

const TitleImg = styled.figure`
    align-items: center;
    display: flex;
    height: auto;
    min-height: 125px;
    max-height: 400px;
    justify-content: center;
    width: 100%;
    margin: 0;

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }

    @media(min-width: 1024px) {

        .gatsby-image-wrapper {
            width: 500px;
            height: 200px;
        }
    }
`

const ImgContainer = styled.figure`
    width: 100%;
    max-width: 400px;
    height: auto;
    min-height: 150px;
    max-height: 400px;
    margin: 0.5em 0;

    .gatsby-image-wrapper {
        width: 100%;
        height: auto;
    }

    @media(min-width: 1024px) {
        margin: 1em 40px;
    }
`

const DetailList = styled.dl`
    margin: 2em 0;

    dt {
        font-size: 25px;
        margin: 0.7em 0 0.5em;
    }

    dd {
        font-size: 18px;
        margin-left: 0;
    }
`

const Button = styled.button`
    background-color: ${props => props.bgColor || "default"};
    background-image: ${props => props.bgImage || "none"};
    border: none;
    border-radius: 5px;
    padding: 1.5em;

    a {
        text-decoration: none;
    }
`

const Index = () => {
    const data = useStaticQuery(graphql`
    {
        oldComputer: file(relativePath: {eq: "designAssets/oldComputer.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        designing: file(relativePath: {eq: "designAssets/designing.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        styling: file(relativePath: {eq: "designAssets/styling.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        coding: file(relativePath: {eq: "designAssets/coding.png"}) {
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
            <SEO
                title="Home"
                description="Get a blazing fast website for your hobby, small business, or non-profit from Josh Drentlaw Web Design."
                keywords={[
                    
                ]}
            />
            <Container
                flexDirLg="column"
                heightSm="calc(100vh - 56px)"
                heightLg="calc(100vh - (56px + 2em))"
                margin="0 0 8em"
            >
                <TitleImg>
                    <Img fluid={data.oldComputer.childImageSharp.fluid} alt="Old computer from the 90's." />
                </TitleImg>
                <Heading>
                    Is your website feeling old and outdated?<br /><br />It's time for something new and fresh!
                </Heading>
            </Container>
            <Container>
                <ImgContainer>
                    <Img fluid={data.designing.childImageSharp.fluid} alt="Design tools." />
                </ImgContainer>
                <BlockText align="left">
                    Getting your business off the ground is hard. There's a million things to manage including meetings, investors, products. The list goes on and on. One thing you probably don't have time to become an expert in, at least not overnight, is building and maintaining a website.
                    <DetailList>
                        <dt>Confidence and expertise</dt>
                        <dd>While you focus on your business, you can rest easy knowing that I understand the ever changing internet landscape.</dd>
                        <dt>Personalized strategy.</dt>
                        <dd>One size does not fit all, especially in business. Your business has specific needs, I can give you specialized SEO, marketing, and design solutions.</dd>
                    </DetailList>
                </BlockText>
            </Container>
            <Container flexDirSm="column-reverse">
                <BlockText align="left">
                    Design is a key aspect to any website, but knowing how to tailor your design to your audience is critical. People make snap judgements that can be hard to come back from, so you want to make sure you're making a stellar first immpression.
                    <DetailList>
                        <dt>More than just design.</dt>
                        <dd>When you hire me to build your website, your not just getting a nice design, your getting my design expertise.</dd>
                        <dt>Modern and meaningful</dt>
                        <dd>You need a website that looks like it lives in the current decade. You need not worry about getting an old tired design from Josh Drentlaw Web Design.</dd>
                    </DetailList>
                </BlockText>
                <ImgContainer>
                    <Img fluid={data.styling.childImageSharp.fluid} alt="Styling tools." />
                </ImgContainer>
            </Container>
            <Container>
                <ImgContainer>
                    <Img fluid={data.coding.childImageSharp.fluid} alt="Screen with code on it." />
                </ImgContainer>
                <BlockText align="left">
                    Whether it's WordPress, Wix, or a custom built website, coding comes up at some point. Trust that the technical aspects of your website are in good hands.
                    <DetailList>
                        <dt>Infinite posibilities</dt>
                        <dd>Anything that your site might need is within reach. In the end your website should function exactly as you imagine.</dd>
                        <dt>From coding to hosting</dt>
                        <dd>Whatever your needs or budget, there is a hosting platform for you, and I will help you determine what will give you the most bang for your buck.</dd>
                    </DetailList>
                </BlockText>
            </Container>
            <BlockText>
                Now is the best time to get started on your website, so please do not hesitate, and <Link to="/contact/">get in contact with me today</Link>!
            </BlockText>
        </Layout>
    )
}

export default Index
