import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TestSlice = ({ slice }) => (
  <section>
    <span className="title">
    
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        
        : <h2>Template slice, update me!</h2>
      }
      <img src={slice.primary.testimage.url} alt={slice.primary.testimage.alt} />
    </span>
<PrismicRichText field={slice.primary.newRichtext} />
<PrismicRichText field={slice.primary.newRT} />


    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    <img src={slice.primary.imageadd.url} alt={slice.primary.imageadd.alt} />



    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
    
  </section>
)

export default TestSlice