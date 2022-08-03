import React, { useState } from 'react'
import styled from 'styled-components';

const FormStyle = styled.form`
    width: 100%;
    .form-group{
        width: 100%;
        margin-bottom: 2rem;
        font-family: 'sans-serif';
    }
    
    label {
        font-size: 1.8rem;
        color: #fff7e6;
    }
    
    input,
    textarea {
        width: 100%;
        display: inline-block;
        font-size: 2rem;
        padding: 1.2rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
    }

    textarea {
        min-height: 250px;
        resize: vertical;
    }

    button[type='submit'] {
        background-color: darkorange;
        color: #fff7e6;
        font-family: 'Montserrat SemiBold';
        font-size: 2rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: 1rem 4rem;
        border-radius: 8px;
        cursor: pointer;
    }
`;



export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  return (
    <div>
        <FormStyle>
            <div className='form-group'>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value) } required/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Your email</label>
                <input type='text' id='email' email='email' value={email} onChange={e => setEmail(e.target.value) } required/>
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Your message</label>
                <textarea type='text' id='message' message='message' value={message} onChange={e => setMessage(e.target.value) } required/>
            </div>
            <button type='submit'>Send</button>
        </FormStyle>
    </div>
  )
}
