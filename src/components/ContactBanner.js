import React from 'react'
import Button from './Button'
import Ptext from './Ptext'
import '../css/ContactBannerStyle.css'

export default function ContactBanner() {
  return (
    <div className='contactBanner__style'>
        <div className='container'>
            <div className='contactBanner__wrapper'>
                <Ptext>
                    Have a project in my mind
                </Ptext>
                <h3 className='contactBanner__heading'>Let me help you</h3>
                <Button btnLink="/contact" btnText="Contact Now"/>
            </div>
        </div>
    </div>
  )
}
