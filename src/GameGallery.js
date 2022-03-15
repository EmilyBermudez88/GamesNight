//GameGallery.js
import IndividualGame from './IndividualGame';

function GameGallery(props){
     // console.log(props)

     // const [cartItem, setCartItem] = useState([]);

     // const setCart = (gameToAdd) => {
     //      console.log(gameToAdd)
     //      setCartItem(() => [...cartItem, gameToAdd])
     // }

     return(
          <section className="gallery">
               <ul className="gameGallery">
                    {props.gameProps.map((game)=>{
                         return(
                              <IndividualGame 
                                   key={game.sku}
                                   image={game.images.medium}
                                   altText={game.description_preview}
                                   name={game.name}
                                   age={game.min_age}
                                   price={game.price_text}
                                   sku={game.sku}
                                   handleClick={props.handleClick}
                              />
                         )
                         })
                    }
               </ul>
          </section>
     )
}

export default GameGallery;