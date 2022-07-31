import React from 'react'
import Button from '../components/Button'
import Ptext from '../components/Ptext'
import '../css/AboutStyle.css'
import AboutImg from '../assets/images/about-page-img.png'
import AboutCVItem from '../components/AboutCVItem'

export default function About() {
  return (
    <div className='about__style' style={{backgroundColor: '#363636'}}>
       <div className='container'>
          <div className='top-section'>
            <div className='about__left'>
              <p className='about__subheading'>
                Hi, I am <span>Apostolos</span>
              </p>
              <h2 className='about__heading'>
                A freelancer developer 
              </h2>
              <div className='about__info'>
                <Ptext>
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
          <div className='about__cv__items'>
            <div className='about__cv__item'>
              <h1 className='about__cv__heading'>Education</h1>
              <AboutCVItem title='School' items={['Tecnical Unicersity of Crete']}/>
              <AboutCVItem />
            </div>
            <div className='about__cv__item'>
              <h1 className='about__cv__heading'>School</h1>
              <AboutCVItem title='School' items={['Tecnical Unicersity of Crete']}/>
              <AboutCVItem />
            </div>
          </div>
       </div>
    </div>
  )
}
