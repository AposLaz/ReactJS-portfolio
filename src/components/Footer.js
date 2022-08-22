import React from 'react'
import Ptext from './Ptext'
import '../css/FooterStyle.css'
import {Link} from 'react-scroll'

export default function Footer() {
  return (
    <div className='footer_Style'>
        <div className='container container_footer'>
            <div className='footer__col1'>
                <h1 className='footer__col1_header'>Apostolos Lazidis</h1>
                <Ptext className='ptext'>
                    <p style={{color: '#bcb4b4'}}>
                    The constant evolution of computer science motivates me to keep up and contribute immediately. I have been invested in computer science since I was a child and now I am passionately following my dream. Learning new things and evolving with the ultimate goal of perfecting them is who I am.

For me, building and improving algorithms is a brain puzzle ready to be solved and they gain life through hardware implementations. But as we protect everything we strive to achieve, a code or a hardware implementation must be secured as well, hence my interest in the security field.

In order to achieve any goal I can work in a team with great pleasure as well as get lost alone.

In my free time, I like to practice classical guitar or read books. Finally, I love having interesting conversations so why not to ask me for more?

                    </p>
                    
                </Ptext>
            </div>
            <div className='footer__col2'>
                <h1 className='footer__col2_header'>Important Links</h1>
                <ul>
                    <li>
                        <Link activeClass="active" 
                            to="home" 
                            spy={true} 
                            smooth={true}
                            duration={1000} 
                            role="button" 
                            tabIndex={0}
                        >Home</Link>
                    </li>
                    <li>
                    <Link activeClass="active" 
                            to="about" 
                            spy={true} 
                            smooth={true}
                            duration={1000} 
                            role="button" 
                            tabIndex={0}
                        >About</Link>
                    </li>
                    <li>
                        <Link activeClass="active" 
                                to="services" 
                                spy={true} 
                                smooth={true}
                                duration={1000} 
                                role="button" 
                                tabIndex={0}
                            >Services</Link>
                    </li>
                    <li>
                        <Link activeClass="active" 
                                to="projects" 
                                spy={true} 
                                smooth={true}
                                duration={1000} 
                                role="button" 
                                tabIndex={0}
                            >Projects</Link>
                    </li>
                    <li>
                        <Link activeClass="active" 
                                to="contact" 
                                spy={true} 
                                smooth={true}
                                duration={1000} 
                                role="button" 
                                tabIndex={0}
                            >Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='footer__col3'>
                <h1 className='footer__col3_header'>Contact Info</h1>
                <ul>
                    <li>
                        <a href='tel:+0306979078872'>+30-6979078872</a>
                    </li>
                    <li>
                        <a href='mailto: aplazidis@gmail.com'>aplazidis@gmail.com</a>
                    </li>
                </ul>
            </div>
            <div className='footer__col4'>
                <h1 className='footer__col4_header'>Social Links</h1>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/' target="_blank" rel='noopener noreferrer'>Facebook</a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/' target="_blank" rel='noopener noreferrer'>Instagram</a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/feed/' target="_blank" rel='noopener noreferrer'>LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='copyright'>
            <div className='container'>
                <p className='para_2'>
                ©2022 All rights reserved | This template is made by Apostolos Lazidis
                </p>
            </div>
        </div>
    </div>
  )
}


