//Header.js
import headerImage from './assets/headerImage.png';
import scrabbleTitle from './assets/scrabbleTitle.png';

function Header(){
     return(
          <header>
               <img src={headerImage} alt="scrabble board" className="scrabbleBoard" />
               <h1>
                    <img src={scrabbleTitle} alt="" />
               </h1>
          </header>
     )
}

export default Header;