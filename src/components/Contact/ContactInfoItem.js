import React from 'react'
import { MdPlace } from 'react-icons/md'
import styled from 'styled-components'
import Ptext from '../Ptext'

const ContactLeftStyle = styled.div`
    padding: 2rem;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    .contact__icon{
        color: var(--white);
        background-color: var(--gray-2);
        padding: 1.3rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    svg{
        width: 3.5rem;
    }
`

export default function ContactInfoItem({
    icon = <MdPlace></MdPlace>,
    text = 'this is info text',
}) {
  return (
    <ContactLeftStyle>
        <div className='contact__icon'>{icon}</div>
        <div className='contact__info'>
            <Ptext>{text}</Ptext>
        </div>
    </ContactLeftStyle>
  )
}
