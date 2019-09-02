import React, { useState } from 'react'
import SEO from "../components/seo"

import Layout, { Container } from '../components/layout'

import styled from 'styled-components'

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

    .error {
        color: red;
        margin: -0.25em 0 0.75em;
        align-self: flex-start;
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
    <input
        className="input"
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required />
)

const FormInput = (props) => (
    <InputContainer id={`${props.name}-container`}>
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

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const Contact = ({ location }) => {
    const [values, setValues] = useState({
        fullname: {
            value: '',
            error: 'Name must contain at least 4 characters.',
            valid: false
        },
        email: {
            value: '',
            error: 'Please enter a valid email.',
            valid: false
        },
        service: {
            value: '',
            error: 'Please choose a service.',
            valid: false
        },
        budget: {
            value: '',
            error: 'Please choose a budget.',
            valid: false
        },
        desc: {
            value: '',
            error: 'Please tell me a little bit about the job.',
            valid: false
        }
    })

    const [valid, setValid] = useState(true)

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
    if (location.hasOwnProperty('state')) {
        if (location.state.hasOwnProperty('service')) {
            service = location.state.service
        }
    }

    const validNameRegex = RegExp(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/);
    const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

    const handleChange = (e) => {
        const {name, value} = e.target
        switch (name) {
            case 'fullname':
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
                if (value.length > 10) {
                    setValues({...values, [name]: {value: value, error: '', valid: true}})
                }
                else {
                    setValues({...values, [name]: {value, error: 'Please tell me a little bit about the job.', valid: false}})
                }
                break;
            default: break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let send = true
        for (let name in values) {
            if (values[name].valid === false) {
                send = false
                setValid(false)
            }
        }

        if (send === false) {
            return
        }
        else {
            const { fullname, email, service, budget, desc } = values

            fetch("/contact/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact",
                    "fullname": fullname.value,
                    "email": email.value,
                    "service": service.value,
                    "budget": budget.value,
                    "desc": desc.value
                })
            })
                .then(() => console.log("Success!"))
                .catch(error => console.log(error))
        }
    }

    return (
        <Layout>
            <SEO title="Hire" description="Please drop a line if you would like to contact Josh Drentlaw about a job. He's always looking for work!" />
            <Container padding="1em 0" justifyLg="space-between">
                <H1>Let me know which service you're interested in and a little bit about the job. I'll be in touch shortly.</H1>
                <Form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} noValidate>
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />
                    <FormInput type="text" name="fullname" placeholder="Full Name" onChange={handleChange} value={values.fullname.value} />
                    {(!valid) && <span className="error">{values.fullname.error}</span>}
                    <FormInput type="email" name="email" placeholder="Email" onChange={handleChange} value={values.email.value} />
                    {(!valid) && <span className="error">{values.email.error}</span>}
                    <FormSelect
                        name="service"
                        placeholder="Choose a service"
                        list={services}
                        onChange={handleChange}
                        value={service || values.service.value}
                    />
                    {(!valid) && <span className="error">{values.service.error}</span>}
                    <FormSelect
                        name="budget"
                        placeholder="Expected Budget"
                        list={budget}
                        onChange={handleChange}
                        value={values.budget.value}
                    />
                    {(!valid) && <span className="error">{values.budget.error}</span>}
                    <textarea name="desc" className="tarea" rows="4" placeholder="Short desc of job..." onChange={handleChange} value={values.desc.value} required></textarea>
                    {(!valid) && <span className="error">{values.desc.error}</span>}
                    <button className="button" type="submit">Submit</button>
                </Form>
            </Container>
        </Layout>
    )
}

export default Contact