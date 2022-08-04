import React from 'react'
import LineSection from './LineSection'
import ServicesSectionItem from './ServicesSectionItem'
import '../css/ServiceSectionStyle.css'
import {MdMiscellaneousServices, MdPhonelinkSetup} from 'react-icons/md';
import {FaHtml5,FaCss3Alt,FaReact} from 'react-icons/fa';
import {SiJavascript,SiPhp,SiNodedotjs,SiMongodb,SiApachekafka,SiRabbitmq,SiDocker,SiGithub} from 'react-icons/si'
import {DiMysql} from 'react-icons/di'



export default function ServiceSection() {
  return (
    <div className='service_class' id='services'>
     <LineSection/>
        <div className='service_title'>
          <p>Skills & Tools</p>
          <h2>MY TOOLBOX & THINGS I CAN DO</h2>
          <p>The skills, tools and technologies I use to bring your products to life:</p>
        </div>
      <LineSection/>

        <div className='container services__allItems'>
            <ServicesSectionItem 
                icon={<FaHtml5 />} 
                title='HTML5' 
                color='#ff0000'
            />
            <ServicesSectionItem 
                icon={<FaCss3Alt />} 
                title='CSS3' 
                color='blue'
            />
            <ServicesSectionItem 
                icon={<SiJavascript />} 
                title='JavaScript' 
                color='yellow'
            />
            <ServicesSectionItem 
                icon={<FaReact />} 
                title='React.js' 
                color= '#4dd2ff'
            />
            <ServicesSectionItem 
                icon={<SiNodedotjs />} 
                title='Node.js' 
                color='#009900'
            />
            <ServicesSectionItem 
                icon={<SiPhp />} 
                title='PHP' 
                color='#6666ff'
            />
            <ServicesSectionItem 
                icon={<DiMysql />} 
                title='MySQL' 
                color='#0000ff'
            />
            <ServicesSectionItem 
                icon={<SiMongodb />} 
                title='MongoDB' 
                color='#009900'
            />
            <ServicesSectionItem 
                icon={<SiApachekafka />} 
                title='Kafka' 
                color='black'
            />
            <ServicesSectionItem 
                icon={<SiRabbitmq />} 
                title='RabbitMQ' 
                color='darkorange'
            />
            <ServicesSectionItem 
                icon={<MdMiscellaneousServices />} 
                title='RESTful APIs' 
                color='#808080'
            />
            <ServicesSectionItem 
                icon={<MdPhonelinkSetup />} 
                title='Responsive Websites' 
                color='#ff4d4d'
            />
            <ServicesSectionItem 
                icon={<SiDocker />} 
                title='Docker' 
                color='#3399ff'
            />
            <ServicesSectionItem 
                icon={<SiGithub />} 
                title='GitHub' 
                color='black'
            />
        </div>
    </div>
  )
}
