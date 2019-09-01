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

const BlockText = styled.section`
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
                    <p>Getting your business off the ground is hard. There's a million things to manage including meetings, investors, products. The list goes on and on. One thing you don't have time to become an expert in overnight is building and maintaining a website.</p>
                    <DetailList>
                        <dt>Confidence and expertise</dt>
                        <dd>You can rest assured knowing that you're in good hands. I have the expertise that will help launch your website and business into outer space.</dd>
                        <dt>Personalized strategy.</dt>
                        <dd>One size does not fit all, especially in business. I can give you specialized SEO, marketing, and design solutions.</dd>
                    </DetailList>
                    <Button><Link to="/services/#seo">Check out my SEO services</Link></Button>
                </BlockText>
            </Container>
            <Container flexDirSm="column-reverse">
                <BlockText align="left">
                    <p>Design is a key aspect to any website, but knowing how to tailor that design to your audience is critical. People make snap judgments that can be hard to come back from. You want to make sure you're making a stellar first impression.</p>
                    <DetailList>
                        <dt>Design and more.</dt>
                        <dd>When you hire me to build your website, your getting more than a nice design. Your getting my design expertise and experience.</dd>
                        <dt>Modern and meaningful</dt>
                        <dd>You need a website that looks like it lives in the current decade. You don't have to worry about getting an old tired design from Josh Drentlaw Web Design.</dd>
                    </DetailList>
                    <Button>
                        <Link to="/services/#design">Check out my design services</Link>
                    </Button>
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
                    <p>Whether it's WordPress, Wix, or a custom built website, coding comes up at some point. You can trust that the technical aspects of your website are in good hands.</p>
                    <DetailList>
                        <dt>Infinite posibilities</dt>
                        <dd>Anything that your site might need is within reach. In the end your website should function exactly as you imagine.</dd>
                        <dt>From coding to hosting</dt>
                        <dd>Whatever your needs or budget, there is a hosting platform for you. I can help you determine what will give you the most bang for your buck.</dd>
                    </DetailList>
                    <Button>
                        <Link to="/services/#static">Check out my website services</Link>
                    </Button>
                </BlockText>
            </Container>
            <BlockText>
                Now is the best time to get started on your website. Check out the <Link to="/services/">list of services I offer</Link> and <Link to="/contact/">get in touch with me</Link> today!
            </BlockText>
        </Layout>
    )
}

export default Index
