import React from 'react'
import Ptext from '../../components/Ptext'
import '../../css/AboutStyle.css'
import AboutImg from '../../assets/images/about-img.jpg'
import Axios from 'axios';
import styled from 'styled-components'

const ButtonDownload = styled.div`
    margin-top: 2rem;
    .download_button {
        font-family: 'Montserrat SemiBold';
        font-size: 2.2rem;
        padding: 0.7em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid darkorange;
    }
    @media only screen and (max-width: 768px) {
        .download_button {
            font-size: 1.8rem;
        }
    }
`


export default function AboutSection() {

  const WriteAndDownloadInPDF = (event)=>{
    event.preventDefault();
    Axios({
      url: 'http://localhost:3000/download/6c31b577e200b84c20d2edb0f737ac9f.pdf',
      method: 'GET',
      responseType: 'blob'
    }).then((res)=>{

      const url = window.URL.createObjectURL(new Blob([res.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'AposLaz-CV.pdf')
      document.body.appendChild(link)
      link.click()
      console.log(res.data)
    })
  }
  
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
                  <ButtonDownload>
                    <button style={{backgroundColor: 'darkorange',color: '#fff7e6'}} className='download_button' onClick={WriteAndDownloadInPDF}>Donwload CV</button>  
                  </ButtonDownload>
                </div>
                <div className='about__right'>
                  <img src={AboutImg} alt='Profile Apostolos Lazidis' />
                </div>
              </div>
          </div>
        </div>
  )
}
