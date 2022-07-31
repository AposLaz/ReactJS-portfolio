import React from 'react'
import Ptext from './Ptext'
import '../css/AboutCVItem.css'

export default function AboutCVItem({
    title="This is title",
    items=['HTML','CSS'],
}) {
  return (
    <div className='styleCVitems'>
        <h1 className='title'>{title}</h1>
        <div className='cvItems'>
            {items.map((item,index)=>(
               <div className='cvItem' key={index}>
                    <Ptext>{item}</Ptext>
                </div>
            ))}
        </div>
    </div>
  )
}
