//Form.js

import { useState, useEffect } from "react";

function Form(props){

     console.log(props.handleSubmit)

     const [players, setPlayers] = useState(2);
     const [age, setAge] = useState(12)

     const handlePlayerCount = (e)=> {
          console.log(e.target.value);
          setPlayers(e.target.value);
     }

     const handlePlayerAge = (e) => {
          console.log(e.target.value)
          setAge(e.target.value);
     }


     return(
          <form 
               action=""
               onSubmit={()=> {props.handleSubmit(age, players)}}
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
               <label htmlFor="ageOfPlayers">Age of Youngest Player</label>
               <select
                    name="ageOfPlayers"
                    id="ageOfPlayers"
                    onChange={handlePlayerAge}
               >
                    <option value="placeholder" disabled></option>
                    <option value="4">3 and Under</option>
                    <option value="6">3-5</option>
                    <option value="9">5-8</option>
                    <option value="13">9-12</option>
                    <option value="18">12-17</option>
                    <option value="100">18+ </option>
               </select>
               
               <button>Get me Games</button>
          </form>
          
     )
}

export default Form;