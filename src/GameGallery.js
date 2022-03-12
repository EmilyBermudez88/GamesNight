//GameGallery.js
import { useState } from 'react';
import IndividualGame from './IndividualGame';

function GameGallery(props){
     // console.log(props.bookProps)
     return(
          <section className="gallery">
               <h2>Take a Peak at Your Books!</h2>
               <ul className="gameGallery">
                    {props.bookProps.map((book)=>{
                         return(
                              <IndividualGame 
                                   key={book.id}
                                   image={book.images.medium}
                                   altText={book.description_preview}
                                   name={book.name}
                                   age={book.min_age}
                                   price={book.price_text}
                                   sku={book.sku}
                              />
                         )
                         })
                    }
               </ul>
          </section>
     )
}

export default GameGallery;