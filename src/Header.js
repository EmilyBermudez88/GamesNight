//Header.js
import scrabble from './assets/scrabble.png';
import scrabbleTitle2 from './assets/scrabbleTitle2.png';

function Header(){
     return(
          <header>
               <img src={scrabble} alt="scrabble board" className="scrabbleBoard" />
               <h1>
                    <img src={scrabbleTitle2} alt="scrabble tiles spelling out Game Night" />
               </h1>
          </header>
     )
}

export default Header;