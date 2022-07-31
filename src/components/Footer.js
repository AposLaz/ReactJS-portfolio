import React from 'react'
import Ptext from './Ptext'
import '../css/FooterStyle.css'

export default function Footer() {
  return (
    <div className='footer_Style'>
        <div className='container container_footer'>
            <div className='footer__col1'>
                <h1 className='footer__col1_header'>Apostolos Lazidis</h1>
                <Ptext>
                    A freelancer web designer.
                    You can find him in asdf sdf 
                    sdfsdf sdfsdff sdf sgds g
                    sdfsf grthetrty rth rthh t
                     rth rthtrh rth rthy trh 
                </Ptext>
            </div>
            <div className='footer__col2'>
                <h1 className='footer__col2_header'>Important Links</h1>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/projects'>Projects</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact</a>
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
                        <a href='https://www.facebook.com/' target="_blank" rel='noreferrer'>Facebook</a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/' target="_blank" rel='noreferrer'>Instagram</a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/feed/' target="_blank" rel='noreferrer'>LinkedIn</a>
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
