//Header.js
import headerImage from './assets/headerImage.png';
import scrabbleTitle from './assets/scrabbleTitle.png';

function Header(){
     return(
          <header>
               {/* <ShoppingCart /> */}
               <img src={headerImage} alt="scrabble board" className="scrabbleBoard" />
               <h1>
                    <img src={scrabbleTitle} alt="" />
               </h1>
               {/* <p>Looking to make your night more interesting? Why not a boardgame!</p> */}
          </header>
     )
}

export default Header;