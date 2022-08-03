import React from 'react'
import '../css/ContactSectionStyle.css'
import ContactInfoItem from './ContactInfoItem'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import ContactForm from './ContactForm'
import LineSection from './LineSection'

export default function ContactSection() {
  return (
    <div className='ContactStyle'>
            <LineSection/>
              <div className='contact_title'>
                <p style={{color: '#bcb4b4'}}>have a project in my mind</p>
                <h3 className='contactBanner__heading'>Let me help you</h3>
                <h2>CONTACT NOW</h2>
              </div>
            <LineSection/>
        <div className='container'>
            
            <div className='contactSection__wrapper'>
                <div className='contact__left'>
                    <ContactInfoItem icon={<MdLocalPhone />} text='+30-6979078872' />
                    <ContactInfoItem icon={<MdEmail />} text='aplazidis@gmail.com' />
                    <ContactInfoItem text='Greece' />
                </div>
                <div className='contact__right'>
                  <ContactForm />
                </div>
            </div>
        </div>    
    </div>
  )
}
