//IndividualGame.js

function IndividualGame(props){

     //key is undefined right now!!
     // console.log(props);
     
     const itemToAdd = () => {
          const gameTitle = props.name;
          const gamePrice = props.price;
          props.handleClick({"name":gameTitle, "price":gamePrice});
     }



     return(
          // need to add in the key property- which I think should be at top most section
          //also we should have a ul and gameContainer be an LI
          <li 
               className="gameContainer"
               >
               <div className="imgContainer">
                    <img src={props.image} alt={props.altText} />
               </div>
               <div className="gameText">
                    <h3>{props.name}</h3>
                    <div className="gameDetails">
                         <p>Min Age: {props.age}</p>
                         <p className="price">Price: {props.price}</p>
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

