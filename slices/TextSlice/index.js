import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'

const TextSlice = ({ slice }) => (
  <section>
      <PrismicRichText field={slice.primary.text} />
      
      <PrismicLink  document={slice.primary.test}>My Link</PrismicLink>
    <style jsx>{`
        section {
          max-width: 1000px;
          margin: 4em auto;
          text-align: center;
          
        }
    `}</style>
  </section>
)

export default TextSlice