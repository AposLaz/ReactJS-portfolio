import React from 'react'
import Ptext from './Ptext'
import Button from './Button'
import { Row, Col } from 'react-bootstrap'
import '../css/HeroSectionStyle.css' 

export default function HeroSection() {
  return (
            <Row className='diagonal_hero' id='home'>
                <Col className='hero'>
                    <div className=''>
                        <h1 className='hero__heading' >
                            <span className='span1'>Hello, I'm</span><br/>
                            <span className='hero__name'>Apostolos Lazidis</span>
                        </h1>
                        <div className='hero__info' >
                            <Ptext>
                                Successful companies know that they need a website. if you want an easy navigation,
                                beautiful and appealing website then <span className='span2'>Hire me!</span>
                            </Ptext>
                            <Button btnLink="/projects" btnText="See my works" />
                        </div>
                    </div>
                </Col>
            </Row>   
  )
}
