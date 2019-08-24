import React from 'react'
import SEO from "../components/seo"

import Layout, { Container } from '../components/layout'

// import styled from 'styled-components'

const Services = () => {

    return (
        <Layout>
            <SEO title="Services" description="Here at Josh Drentlaw Web Design, I offer a number of services to get your website off the ground right." />
            <Container padding="2em 0" heightLg="60vh" flexDirLg="column">
                <h1>Here at Josh Drentlaw Web Design, I offer a number of services to get your website off the ground right.</h1>
                <ul>
                    <li>
                        <dl>
                            <dt>WordPress, Wix, SquareSpace</dt>
                            <dd>I can help you setup, repair, update, or customize any WordPress, Wix, or SquareSpace website.</dd>
                            <dd>These services can often times be fairly cheap, so don't sweat it if you need a quick fix.</dd>
                            <dt>Other websites</dt>
                            <dd>Need help but your site isn't one of the types listed above? That's fine too! I welcome any type of website you might need help with.</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>Static Website</dt>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>Dynamic Website</dt>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>SEO, Marketing, Advertising</dt>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>Custom Images and Video</dt>
                        </dl>
                    </li>
                </ul>
            </Container>
        </Layout>
    )
}

export default Services