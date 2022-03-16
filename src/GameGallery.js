//GameGallery.js
import IndividualGame from './IndividualGame';

function GameGallery(props){
     // console.log(props);

     return(
          <section className="gallery">
               <ul className="gameGallery">
                    {props.gameProps.map((game)=>{
                         return(
                              <IndividualGame 
                                   key={game.id}
                                   infoToPass={game.id}
                                   image={game.images.medium}
                                   altText={game.description_preview}
                                   name={game.name}
                                   age={game.min_age}
                                   price={game.price_ca}
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