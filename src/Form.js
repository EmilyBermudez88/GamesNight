//Form.js

import { useState } from "react";

function Form(props){

     //state to gather values of selects according to user selection
     const [inputValues, setInputValues] = useState({});

     //function to gather player count selection
     const handlePlayerCount = (e)=> {
          const choice1= {"players":e.target.value}
          
          setInputValues({
               ...inputValues,
               ...choice1,
          });
     }

     //function to gather minimum age of players 
     const handlePlayerAge = (e) => {
          const choice2 = {"age": e.target.value}

          setInputValues({
               ...inputValues,
               ...choice2
          })
     }

     //function to call handleSubmit (passed down from App.js) with user input passed back up
     const handleUserChoices = (e) => {
          props.handleSubmit(e, inputValues)
     }

     return(
          <section className="form">
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
                         <option value="placeholder"></option>
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
          </section>
          
          
     )
}

export default Form;