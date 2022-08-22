import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button {
        font-family: 'Montserrat SemiBold';
        font-size: 2.2rem;
        background-color: ${(props) => 
            props.outline ? 'transparent' : 'darkorange'
        };
        padding: 0.7em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid darkorange;
        color: ${props => props.outline ? 'darkorange' : '#fff7e6'};
    }
    @media only screen and (max-width: 768px) {
        .button {
            font-size: 1.8rem;
        }
    }
`

export default function Button({ btnLink, btnText, outline = false }) {
  return (
    <ButtonStyle outline={outline} className='button-wrapper'>
        <Link className='button' to={ btnLink }>{btnText}</Link>
    </ButtonStyle>
  )
}
