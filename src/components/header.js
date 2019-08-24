import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Nav = styled.nav`
    background-color: #000;
    bottom: 0;
    height: 56px;
    position: fixed;
    width: 100%;
    z-index: 50;

    @media(min-width: 1024px) {
        background-color: transparent;
        position: relative;
        top: 0;
    }
`

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    overflow-x: scroll;
    width: 100%;

    @media(min-width: 1024px) {
        overflow-x: visible;
        width: 40%;
    }
`

const A = styled(Link)`
    padding: 0.5em 1em;
    text-decoration: none;

    &:link, &:visited {
        color: white;
        font-weight: 700;
    }

    &.active, &:hover {
        color: red;
    }
`

const Header = () => {
    return (
        <Nav>
            <Wrapper>
                <A id="home" activeClassName="active" to="/">Home</A>
                <A id="about" activeClassName="active" to="/about/">About</A>
                <A id="services" activeClassName="active" to="/services/">Services</A>
                <A id="work" activeClassName="active" to="/work/">Work</A>
                <A id="contact" activeClassName="active" to="/contact/">Hire</A>
                <A id="blog" activeClassName="active" to="/blog/">Blog</A>
            </Wrapper>
        </Nav>
    )
}

export default Header