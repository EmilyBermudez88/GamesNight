//IndividualGame.js

function IndividualGame(props){
     const handleClick = (e)=> {
          console.log('clicked')
          console.log(e)
     }
     return(
          <div>
               <img src={props.image} alt={props.altText}/>
               <h3>{props.name}</h3>
               <p>Min Age: {props.age}</p>
               <p>Price: {props.price}</p>
               <button
                    onClick={handleClick}
                    className={props.sku}
               >Add to Cart</button>
          </div>
     )
}
export default IndividualGame;


//create a click function 
