import React from 'react'
import styled from 'styled-components';

const ColoredLine = styled.div`
    
    hr {
        border: 2px solid orange;
        width: 30%;
        border-radius: 10px;
        margin: auto;
    }
`;

export default function LineSection() {
  return (
    <ColoredLine><hr/></ColoredLine>
  )
}

