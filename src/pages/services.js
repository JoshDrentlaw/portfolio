import React from 'react'
import SEO from "../components/seo"

import Layout, { Container } from '../components/layout'

// import styled from 'styled-components'

const Services = () => {

    return (
        <Layout>
            <SEO title="Services" description="I offer a number of services to get your website off the ground right." />
            <Container padding="2em 0" flexDirLg="column">
                <h1>I offer a number of services to get your website off the ground right.</h1>
                <ul>
                    <li>
                        <dl>
                            <dt>Updates and Repairs</dt>
                            <dd>I can help you repair, update, or customize any website.</dd>
                            <dd>These services can oftentimes be inexpensive, so don't sweat it if you need a quick fix.</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>Static Website</dt>
                            <dd>A static website is the perfect way to display basic information to your fans or customers.</dd>
                            <dd>These days it's easy to update a static website with new content. The main downside is waiting for the website to "rebuild" itself.</dd>
                            <dd>The cost of a static website is usually low.</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>Dynamic Website</dt>
                            <dd>Dynamic websites have the ability to update as soon as you make a change.</dd>
                            <dd>Dynamic websites are perfect if you have a lot of content that could change at any time.</dd>
                            <dd>The cost can vary depending on the complexity of the website.</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>SEO, Marketing, Advertising</dt>
                            <dd>I can help you make sure your website is ranking on the first page of Google. This is a critical step for any business.</dd>
                            <dd>I can help you identify any weak points you might have overlooked in your marketing strategy.</dd>
                            <dd>I can help you target your advertising campaigns so your money doesn't go to waste.</dd>
                        </dl>
                    </li>
                </ul>
            </Container>
        </Layout>
    )
}

export default Services