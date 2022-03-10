//Form.js

import { useState, useEffect } from "react";

function Form(){

     const [playerCount, setPlayerCount] = useState(2);
     const [playerAge, setPlayerAge] = useState(12)

     const handlePlayerCount = (e)=> {
          console.log(e.target.value)
          setPlayerCount(e.target.value);
     }

     const handlePlayerAge = (e) => {
          console.log(e.target.valueAsNumber)
          setPlayerAge(e.target.valueAsNumber)
     }

     return(
          <form 
               action=""
               // onSubmit=
          >
               <label htmlFor="numberOfPlayers">How Many Players are Joining the Game?</label>
               <select 
                    name="numberOfPlayers" 
                    id="numberOfPlayers"
                    onChange={handlePlayerCount}
               >
                    <option value="placeholder" disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
               </select>
               <label htmlFor="ageOfPlayers">Age Range?</label>
               <input 
                    type="number"
                    name="ageOfPlayers"
                    onChange={handlePlayerAge}
               />
               <button>Get me Games</button>
          </form>
          
     )
}

export default Form;