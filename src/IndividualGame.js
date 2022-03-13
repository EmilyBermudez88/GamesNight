//IndividualGame.js

function IndividualGame(props){

     // console.log(props);
     
     const itemToAdd = () => {
          const gameTitle = props.name;
          const gamePrice = props.price;
          props.handleClick({"name":gameTitle, "price":gamePrice});
     }


     return(
          <div className="gameContainer">
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
               
          </div>
     )
}
export default IndividualGame;

