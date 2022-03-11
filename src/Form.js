//Form.js

import { useState, useEffect } from "react";

function Form(props){

     // console.log(props.handleSubmit)

     const [inputValues, setInputValues] = useState({});

     const handlePlayerCount = (e)=> {
          const choice1= {"players":e.target.value}
          
          setInputValues({
               ...inputValues,
               ...choice1,
          });
     }

     const handlePlayerAge = (e) => {
          const choice2 = {"age": e.target.value}

          setInputValues({
               ...inputValues,
               ...choice2
          })
     }

     const handleUserChoices = (e) => {
          props.handleSubmit(e, inputValues)
     }

     return(
          <form 
               action=""
               onSubmit={handleUserChoices}
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
                    <option value="placeholder"></option>
                    <option value="6">5 and Under</option>
                    <option value="10">6-9</option>
                    <option value="13">10-12</option>
                    <option value="18">12-17</option>
                    <option value="100">18+ </option>
               </select>
               
               <button>Get me Games</button>
          </form>
          
     )
}

export default Form;