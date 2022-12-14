import React, { useState } from 'react';
import { Link as NavLink } from 'react-scroll';
import styled from 'styled-components'
import { MdMenu,MdClose } from 'react-icons/md';

const NavMenuStyles = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: #0d0d0d;
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        li {
            display: inline-block;
            border-radius: 8px;
            transition: .3s ease background-color;
            &:hover{
                background-color: #1E1E1E;
            }
        }
        a {
            display: inline-block;
            font-family: 'sans-serif'; 
            padding: 1rem 2rem;
            font-size: 2rem;
            color: grey;
            outline: none;
            text-decoration: none;
        }
        .active {
            color: white;
        } 
    }
    .mobile-menu-icon {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        display: none;
        outline: none;
        * {
            pointer-events: none;
        }
    }
    .closeNavIcon {
        display: none;
    }
    @media only screen and (max-width: 768px){
        padding: 0;
        .hide-item {
            transform: translateY(calc(-100% - var(--top)));
        }
        .mobile-menu-icon {
            display: block;
            color: #F5F5F5;
        }
        .navItems{
            --top: 1rem;
            transition: .3s ease transform;
            background-color: #1E1E1E;
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);
            .closeNavIcon {
                display: block;
                color: #F5F5F5;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                * {
                    pointer-events: none;
                }
            }
            li {
                display: block;
                margin-bottom: 1rem;
            }
        }
    }
`;

export default function NavMenu(){
    const [showNav, SetShowNav] = useState(false)
    return (
        <NavMenuStyles>
            <div className='mobile-menu-icon'
                 onClick={() => SetShowNav(!showNav)} 
                 role="button" 
                 onKeyDown={() => SetShowNav(!showNav)}
                 tabIndex={0}
            >
                <MdMenu size={42}/>
            </div>
            <ul className={!showNav ? "navItems hide-item" : "navItems"} >
                <div className='closeNavIcon' 
                     onClick={() => SetShowNav(!showNav)} 
                     role="button" 
                     onKeyDown={() => SetShowNav(!showNav)}
                     tabIndex={0}>
                    <MdClose size={42}/>
                </div>
                <li>
                    <NavLink activeClass="active" 
                        to="home" 
                        spy={true} 
                        smooth={true}
                        duration={1000} 
                        onClick={() => SetShowNav(!showNav)} 
                        role="button" 
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink activeClass="active" 
                        to="about" 
                        spy={true} 
                        smooth={true}
                        duration={1000} 
                        
                        onClick={() => SetShowNav(!showNav)} 
                        role="button" 
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >About</NavLink>
                </li>
                <li>
                    <NavLink activeClass="active" 
                        to="services" 
                        spy={true} 
                        smooth={true}
                        duration={1000}  
                    

                        onClick={() => SetShowNav(!showNav)} 
                        role="button" 
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >Services</NavLink>
                </li>
                <li>
                    <NavLink activeClass="active" 
                        to="projects" 
                        spy={true} 
                        smooth={true}
                        duration={1000}  
                        onClick={() => SetShowNav(!showNav)} 
                        role="button" 
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >Projects</NavLink>
                </li>
                <li>
                    <NavLink activeClass="active" 
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        duration={1000}
                        onClick={() => SetShowNav(!showNav)} 
                        role="button" 
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >Contact</NavLink>
                </li>
            </ul>
        </NavMenuStyles>
    );
}