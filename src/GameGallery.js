//GameGallery.js
import { useState } from 'react';
import IndividualGame from './IndividualGame';

function GameGallery(props){
     // console.log(props.bookProps)

     const [cartItem, setCartItem] = useState([]);

     const setCart = (gameToAdd) => {
          console.log(gameToAdd)
          setCartItem(() => [...cartItem, gameToAdd])
     }

     return(
          <section className="gallery">
               <h2>Take a Peak at Your Books!</h2>
               <ul className="gameGallery">
                    {props.gameProps.map((game)=>{
                         return(
                              <IndividualGame 
                                   key={game.id}
                                   image={game.images.medium}
                                   altText={game.description_preview}
                                   name={game.name}
                                   age={game.min_age}
                                   price={game.price_text}
                                   sku={game.sku}
                                   handleClick={setCart}
                              />
                         )
                         })
                    }
               </ul>
          </section>
     )
}

export default GameGallery;