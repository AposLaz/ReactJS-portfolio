import React from 'react'
import SectionTitle from './SectionTitle'
import '../css/ContactSectionStyle.css'
import ContactInfoItem from './ContactInfoItem'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <div className='ContactStyle'>
        <div className='container'>
            <SectionTitle subheading='get in touch' heading='Contact'/>
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
