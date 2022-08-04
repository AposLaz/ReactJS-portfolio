import React from 'react'
import projectImg from '../../assets/images/projectImg.png'
import styled from 'styled-components'

const ProjectItemStyle = styled.div` 
    font-family: 'Montserrat SemiBold';
    .projectItem__img{
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid var(--gray-2);
        img{
            height: 100%;
        }
    }

    .projectItem__info {
        margin-top: 1rem;
        background-color: #1a1a1a;
        padding: 1rem;
        border-radius:12px;
    }

    .projectItem__title{
        font-size: 2.2rem;
        color: darkorange;
    }

    .projectItem__desc{
        font-size: 1.6rem;
        font-family: 'sans-serif';
        margin-top: 1rem;
    }

    @media only screen and (max-width: 768px){
        .projectItem__img{
            height:350px;
        }
    }
` 

export default function ProjectItem({
    title= 'Projects',
    desc='Happy',
    img={projectImg},
    url='/home'
}) {
  return (
    <ProjectItemStyle>
        <a href={url} className="projectItem__img" target="_blank" rel='noreferrer'>
            <img src={img} alt={title} />
        </a>
        <div className='projectItem__info'>
            <a href={url} target="_blank" rel='noreferrer'>
                <h3 className='projectItem__title'>{title}</h3>
            </a>
            <p className='projectItem__desc'>
                {desc}
            </p>
        </div>
    </ProjectItemStyle>
  )
}
