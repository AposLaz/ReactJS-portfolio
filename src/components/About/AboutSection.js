import React from 'react'
import Button from '../Button'
import Ptext from '../Ptext'
import '../../css/AboutStyle.css'
import AboutImg from '../../assets/images/about-img.jpg'

export default function AboutSection() {
  return (
        <div className='about__style' id='about'>
          <div className='container'>
              <div className='top-section'>
                <div className='about__left'>
                  <p className='about__subheading'>
                    Hi, I am 
                  </p>
                  <h2 className='about__heading' >
                    <span style={{color: 'darkorange'}}>Apostolos</span> 
                  </h2>
                  <div className='about__info'>
                    <Ptext>
                        <br/>
                      A Web Developer from Grevena, GR.
                        <br/><br/>
                        I have a degree of MSc in Electrical and Computer Engineering from Technical University of Crete, Chania GR.
                        <br/><br/>
                        Passionate about learning new technologies and evolve my skills. I create custom websites to help business
                        do better online. Seeking to improve the customer service experience by implementing a personalized approach
                        to every client.
                    </Ptext>
                  </div>
                  <Button btnText="Download CV" btnLink="#"/>
                </div>
                <div className='about__right'>
                  <img src={AboutImg} alt='Profile Apostolos Lazidis' />
                </div>
              </div>
          </div>
        </div>
  )
}
