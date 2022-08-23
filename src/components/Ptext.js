import React from 'react'
import styled from 'styled-components'

const Pstyle = styled.div`
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.8rem;
    
    p {
      font-family: 'sans-serif';
      color: #fff7e6;
    }
    @media only screen and (max-width: 768px) {
        
        max-width: 500px;
        p{
          font-size: 1.4rem;
        }
    }
`;

export default function Ptext(props) {
  return (
    <Pstyle className="para">
        <p>{props.children}</p>
    </Pstyle>
  )
}
