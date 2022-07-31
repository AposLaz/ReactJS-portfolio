import React from 'react'
import {NavLink} from 'react-router-dom'
import projectImg from '../assets/images/projectImg.png'
import styled from 'styled-components'

const ProjectItemStyle = styled.div` 
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
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius:12px;
    }

    .projectItem__title{
        font-size: 2.2rem;
    }

    .projectItem__desc{
        font-size: 1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
    }

    @media only screen and (max-width: 768px){
        .projectItem__img{
            height:350px;
        }
    }
` 

export default function ProjectItem() {
  return (
    <ProjectItemStyle>
        <NavLink to="/projects" className="projectItem__img">
            <img src={projectImg} alt="project img" />
        </NavLink>
        <div className='projectItem__info'>
            <NavLink to='#'>
                <h3 className='projectItem__title'>Project 1</h3>
            </NavLink>
            <p className='projectItem__desc'>
                lore sdf jkxcv oweore sdosdf fdvo df oeoeo dfdf sdf
            </p>
        </div>
    </ProjectItemStyle>
  )
}
