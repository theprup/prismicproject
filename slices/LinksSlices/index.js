import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const LinksSlices = ({ slice }) => (
  <section>
    <span className="title">
      
        <PrismicRichText field={slice.primary.title}/>
        
      
    </span>
    <PrismicRichText field={slice.primary.richtextlinks} />

    <style jsx>{`
    section {
          max-width: 600px;
          text-align: left;
        }
        .title {
          color: darkblue;
        }
        .h2 {
          color: #blue;
        }
    `}</style>
  </section>
)

export default LinksSlices