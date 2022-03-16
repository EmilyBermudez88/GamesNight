//IndividualGame.js

function IndividualGame(props){

     //key is undefined right now!!
     // console.log(props.something);
     
     const itemToAdd = () => {
          const gameTitle = props.name;
          const gamePrice = props.price;
          const key = props.infoToPass
          const image = props.image;
          props.handleClick({"name":gameTitle, "price":gamePrice, "key":key, "image": image});
     }



     return(
          // need to add in the key property- which I think should be at top most section
          //also we should have a ul and gameContainer be an LI
          <li 
               className="gameContainer"
               >
               <div className="imgContainer">
                    <img src={props.image} alt={`picture of board game ${props.altText}`}/>
               </div>
               <div className="gameText">
                    <h2>{props.name}</h2>
                    <div className="gameDetails">
                         <p>Min Age: {props.age}</p>
                         <p className="price">Price: ${props.price}</p>
                         <button
                              onClick={itemToAdd}
                              className={props.name}
                         >Add to Cart</button>
                    </div>
               </div>
               
          </li>
     )
}
export default IndividualGame;

