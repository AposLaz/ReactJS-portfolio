import React from 'react'
import Button from '../Button'
import Ptext from '../Ptext'
import '../../css/ContactBannerStyle.css'
import ContactSection from './ContactSection'

export default function ContactBanner() {
  return (
    <div className='contactBanner__style'>
        <div className='container'>
            <div className='contactBanner__wrapper'>
                <Ptext>
                    <p style={{color: '#bcb4b4'}}>Have a project in my mind</p>
                </Ptext>
                <h3 className='contactBanner__heading'>Let me help you</h3>
                <Button btnLink="/contact" btnText="Contact Now"/>
            </div>
            <ContactSection />
        </div>
        
    </div>
  )
}
