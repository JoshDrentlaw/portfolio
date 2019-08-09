import React from 'react'

import styled from 'styled-components'

import { Socials } from '../components/layout'

const Foot = styled.footer`
    height: 100px;
    margin-bottom: 56px;

    @media(min-width: 1024px) {
        margin-bottom: 0;
    }
`

const Wrapper = styled.div`
    align-items: center;
    border-top: 1px solid white;
    box-sizing: content-box;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px;
    text-align: center;

    @media(min-width: 1024px) {
        width: 40%;
    }
`

const Footer = () => {
    return (
        <Foot>
            <Wrapper>
                © 2019 Josh Drentlaw Web Design
                <Socials />
            </Wrapper>
        </Foot>
    )
}

export default Footer