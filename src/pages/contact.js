import React from 'react'
import SEO from "../components/seo"

import Layout, { Container } from '../components/layout'

import styled from 'styled-components'

/* const FormContainer = styled(Container)`
    height: 100vh;
` */

const Form = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;

    @media(min-width: 1024px) {
        width: 50%;
    }

    .button {
        border: 1px solid red;
        background-color: red;
        color: white;
        font-size: 1.2em;
        font-weight: 700;
        margin-left: auto;
        padding: 1em;
    }

    .tarea {
        border: 2px solid red;
        box-sizing: border-box;
        font-family: sans-serif;
        font-size: 20px;
        font-weight: 700;
        margin: 1em 0;
        padding: 10px;
        padding-top: 10px;
        width: 100%;
        
        &::placeholder {
            box-sizing: border-box;
            color: black;
            font-family: sans-serif;
            font-size: 20px;
            font-weight: 700;
            width: 100%;
        }
    }
`

const InputContainer = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;

    .input {
        border: 2px solid red;
        box-sizing: border-box;
        font-size: 20px;
        font-weight: 700;
        height: 50px;
        margin: 1em 0;
        padding: 10px;
        width: 100%;
        
        &::placeholder {
            box-sizing: border-box;
            color: black;
            font-size: 20px;
            font-weight: 700;
            height: 30px;
            width: 100%;
        }
    }

    .label {
        visibility: none;
    }
`

const SelectContainer = styled(InputContainer)`
    .select {
        border: 2px solid red;
        box-sizing: border-box;
        font-size: 15px;
        font-weight: 700;
        height: 50px;
        margin: 1em 0;
        padding: 10px;
        width: 100%;
        
        option {
            box-sizing: border-box;
            color: black;
            font-size: 15px;
            font-weight: 700;
            height: 30px;
            width: 100%;
        }
    }
`

const Input = (props) => (
    <input className="input" type={props.type} name={props.name} placeholder={props.placeholder} />
)

const FormInput = (props) => (
    <InputContainer>
        <label className="label" htmlFor={props.name} />
        <Input {...props} />
    </InputContainer>
)

const FormSelect = (props) => {
    const budget = props.budget;

    return (
        
            <SelectContainer>
                <label className="label" htmlFor={props.name} />
                <select name={props.name} className="select">
                    <option value="" disable="true" style={{ display: 'none' }}>{props.placeholder}</option>
                    <option value="Blank"></option>
                    {
                        budget.map((item, i) => {
                            return <option key={i + (100 * Math.random())} value={item}>{item}</option>
                        })
                    }
                </select>
            </SelectContainer>
    )
}

const Contact = () => {
    const budget = [
        "$500-$1000",
        "$1000-$5000",
        "$5000-$10000",
        "$10000+"
    ]
    
    return (
        <Layout>
            <SEO title="Hire" description="Please drop a line if you would like to contact Josh Drentlaw about a job. He's always looking for work!" />
            <Container padding="1em 0" justifyLg="space-between">
                <h1>If you'd like to hire me...</h1>
                <Form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />
                    <FormInput type="text" name="name" placeholder="Full Name" />
                    <FormInput type="email" name="email" placeholder="Email" />
                    <FormSelect
                        name="budget"
                        placeholder="Expected Budget"
                        budget={budget}
                    />
                    <textarea name="desc" className="tarea" rows="4" placeholder="Short desc of job..."></textarea>
                    <button className="button" type="submit">Submit</button>
                </Form>
            </Container>
        </Layout>
    )
}

export default Contact