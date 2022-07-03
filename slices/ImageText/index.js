import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const ImageText = ({ slice }) => (
  <section>
    <span className="title">
      {
        
        <PrismicRichText field={slice.primary.title}/>

      }
    </span>
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} className="image" />
    <PrismicRichText field={slice.primary.text}/>
    <style jsx>{`
        section {
          max-width: 600px;
          text-align: left;
        }
        .title {
          color: #8592e0;
        }
        .h2 {
          color: #blue;
        }


    `}</style>
  </section>
)

export default ImageText