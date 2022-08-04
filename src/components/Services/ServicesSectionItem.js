import React from 'react'
import {MdDesktopMac} from 'react-icons/md';
import styled from 'styled-components'

const ItemStyles = styled.div`
    text-align: center;
    .servicesItem__icon{
        svg{
            width: 8rem;
            fill: ${props => props.color };
        }
    }
    .servicesItem__title{
        font-size: 2.5rem;
        font-family: 'Montserrat SemiBold';
        color: #fff7e6;
    }

    @media only screen and (max-width: 768px) {
        width: 80px;
        .servicesItem__icon{
            svg{
                width: 4rem;
            }
        }
        .servicesItem__title{
            font-size: 1.3rem;
        }
    }
`

export default function ServicesSectionItem({
    icon = <MdDesktopMac />,
    title = 'web design',
    color = 'white',
}) {
  return (
    <ItemStyles color={color}>
        <div className='servicesItem__icon'>{icon}</div>
            
        <div className='servicesItem__title'>{title}</div>
    </ItemStyles>
  )
}
