import React from 'react'
import { PrismicRichText } from '@prismicio/react'


const ImageGallery = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    
    { slice?.items?.map((item, i) => /* import { PrismicRichText } from '@prismicio/react' */
    <section>
      <PrismicRichText field={item.text} />
      <img src={item.imagefield.url} alt={item.imagefield.alt} className="image" />
    </section>
    ) 
    }

    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: darkblue;
        }
        .image {
        
        }
    `}</style>
  </section>
)

export default ImageGallery