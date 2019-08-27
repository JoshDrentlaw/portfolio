import React from 'react'
import { Link } from 'gatsby'
import SEO from "../components/seo"

import Layout, { Container } from '../components/layout'

import styled from 'styled-components'

const H1 = styled.h1`
    font-size: calc(2em + (3 - 2) * (100vw - 300px) / (880 - 300));
    text-align: center;
`

const ServiceList = styled.ul`
    list-style: none;
    padding: 0;
`

const ServiceContainer = styled.dl`
    margin: 4em 0;

    dt {
        font-size: 2.5em;
        font-weight: 900;
        margin-bottom: 0.75em;
    }

    dd {
        font-size: 1.5em;
        margin: 0.5em 0;
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

const Services = () => {

    return (
        <Layout>
            <SEO title="Services" description="I offer many services to get your website off the ground right." />
            <Container flexDirLg="column">
                <H1>I offer many services to get your website off the ground right.</H1>
                <ServiceList>
                    <li id="updates">
                        <ServiceContainer>
                            <dt>Updates and Repairs</dt>
                            <dd>I can help you repair, update, or customize any website.</dd>
                            <dd>These services can oftentimes be inexpensive, so don't sweat it if you need a quick fix.</dd>
                        </ServiceContainer>
                        <Button>
                            <Link
                                to="/contact/"
                                state={{ service: "Updates & Repairs"}}
                            >Inquire about Updates and Repairs</Link>
                        </Button>
                    </li>
                    <li id="design">
                        <ServiceContainer>
                            <dt>Website Design</dt>
                            <dd>Before we can build your website, we need to talk about what it should look like, and what it's purpose will be.</dd>
                            <dd>Once we have a design in place, we can begin the build process, and bring your design to life.</dd>
                            <dd>I include the cost of the design in the cost of the website. Please see the static and dynamic website options below.</dd>
                        </ServiceContainer>
                    </li>
                    <li id="static">
                        <ServiceContainer>
                            <dt>Static Website</dt>
                            <dd>A static website is the perfect way to display basic information to your fans or customers.</dd>
                            <dd>These days it's easy to update a static website with new content. The main downside is waiting for the website to "rebuild" itself.</dd>
                            <dd>The cost of a static website is usually low.</dd>
                        </ServiceContainer>
                        <Button>
                            <Link
                                to="/contact/"
                                state={{ service: "Static Website"}}
                            >Inquire about a static website</Link>
                        </Button>
                    </li>
                    <li id="dynamic">
                        <ServiceContainer>
                            <dt>Dynamic Website</dt>
                            <dd>Dynamic websites have the ability to update as soon as you make a change.</dd>
                            <dd>Dynamic websites are perfect if you have a lot of content that could change at any time.</dd>
                            <dd>The cost can vary depending on the complexity of the website.</dd>
                        </ServiceContainer>
                        <Button>
                            <Link
                                to="/contact/"
                                state={{ service: "Dynamic Website"}}
                            >Inquire about a dynamic website</Link>
                        </Button>
                    </li>
                    <li id="seo">
                        <ServiceContainer>
                            <dt>SEO, Marketing, Advertising</dt>
                            <dd>I can help you make sure your website is ranking on the first page of Google. This is a critical step for any business.</dd>
                            <dd>I can help you identify any weak points you might have overlooked in your marketing strategy.</dd>
                            <dd>I can help you target your advertising campaigns so your money doesn't go to waste.</dd>
                        </ServiceContainer>
                        <Button>
                            <Link
                                to="/contact/"
                                state={{ service: "SEO, Marketing, Advertising"}}
                            >Inquire about SEO, marketing, and advertising</Link>
                        </Button>
                    </li>
                </ServiceList>
            </Container>
        </Layout>
    )
}

export default Services