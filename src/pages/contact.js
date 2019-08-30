import React, { useState } from 'react'
import SEO from "../components/seo"

import Layout, { Container } from '../components/layout'

import styled from 'styled-components'

/* const FormContainer = styled(Container)`
    height: 100vh;
` */

const H1 = styled.h1`
    padding: 0 0.5em;

    @media(min-width: 1024px) {
        font-size: 30px;
        width: 50%;
    }
`

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
    <input className="input" type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value} required />
)

const FormInput = (props) => (
    <InputContainer>
        <label className="label" htmlFor={props.name} />
        <Input {...props} />
    </InputContainer>
)

const FormSelect = (props) => {
    const list = props.list;

    return (
        
            <SelectContainer>
                <label className="label" htmlFor={props.name} />
                <select name={props.name} className="select" value={props.value} onChange={props.onChange}>
                    <option value="" disable="true" style={{ display: 'none' }}>{props.placeholder}</option>
                    <option value="Blank"></option>
                    {
                        list.map((item, i) => {
                            return (
                                <option
                                    key={i + (100 * Math.random())}
                                    value={item}
                                >
                                    {item}
                                </option>
                            )
                        })
                    }
                </select>
            </SelectContainer>
    )
}

const Contact = ({ location }) => {
    const [values, setValues] = useState({
        name: {
            value: '',
            error: '',
            valid: false
        },
        email: {
            value: '',
            error: '',
            valid: false
        },
        service: {
            value: '',
            error: '',
            valid: false
        },
        budget: {
            value: '',
            error: '',
            valid: false
        },
        desc: {
            value: '',
            error: '',
            valid: false
        }
    })

    const budget = [
        "Less than $500",
        "$500-$1000",
        "$1000-$5000",
        "$5000-$10000",
        "$10000+"
    ]

    const services = [
        "Updates & Repairs",
        "Static Website",
        "Dynamic Website",
        "SEO, Marketing, Advertising"
    ]

    let service
    if (location.state !== undefined) {
        service = location.state.service
    }

    const validNameRegex = RegExp(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/)
    const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)

    const handleChange = (e) => {
        const {name, value} = e.target
        switch (name) {
            case 'name':
                if (validNameRegex.test(value)) {
                    setValues({...values, [name]: {value: value, error: '', valid: true}})
                }
                else {
                    setValues({...values, [name]: {value, error: 'Name must contain at least 4 characters.', valid: false}})
                }
                break;
            case 'email':
                if (validEmailRegex.test(value)) {
                    setValues({...values, [name]: {value: value, error: '', valid: true}})
                }
                else {
                    setValues({...values, [name]: {value, error: 'Please enter a valid email.', valid: false}})
                }
                break;
            case 'service':
                if (value !== '') {
                    setValues({...values, [name]: {value: value, error: '', valid: true}})
                }
                else {
                    setValues({...values, [name]: {value, error: 'Please choose a service.', valid: false}})
                }
                break;
            case 'budget':
                if (value !== '') {
                    setValues({...values, [name]: {value: value, error: '', valid: true}})
                }
                else {
                    setValues({...values, [name]: {value, error: 'Please choose a budget.', valid: false}})
                }
                break;
            case 'desc':
                if (value !== '') {
                    setValues({...values, [name]: {value: value, error: '', valid: true}})
                }
                else {
                    setValues({...values, [name]: {value, error: 'Please tell me a little bit about the job.', valid: false}})
                }
                break;
        }
    }

    const handleSubmit = (e) => {
        
    }

    return (
        <Layout>
            <SEO title="Hire" description="Please drop a line if you would like to contact Josh Drentlaw about a job. He's always looking for work!" />
            <Container padding="1em 0" justifyLg="space-between">
                <H1>Let me know which service you're interested in and a little bit about the job. I'll be in touch shortly.</H1>
                <Form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} noValidate>
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />
                    <FormInput type="text" name="name" placeholder="Full Name" onChange={handleChange} value={values.name.value} />
                    <FormInput type="email" name="email" placeholder="Email" onChange={handleChange} value={values.email.value} />
                    <FormSelect
                        name="service"
                        placeholder="Choose a service"
                        list={services}
                        onChange={handleChange}
                        value={service || values.service.value}
                    />
                    <FormSelect
                        name="budget"
                        placeholder="Expected Budget"
                        list={budget}
                        onChange={handleChange}
                        value={values.budget.value}
                    />
                    <textarea name="desc" className="tarea" rows="4" placeholder="Short desc of job..." onChange={handleChange} value={values.desc.value} required></textarea>
                    <button className="button" type="submit">Submit</button>
                </Form>
            </Container>
        </Layout>
    )
}

export default Contact