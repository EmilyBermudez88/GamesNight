//CartMenu.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';



function CartMenu (props){

     // console.log(props);

     //function passed down from App.js - pull name from game selected
     const removeItem = () => {
          const itemToRemove = props.name;
          props.handleClick(itemToRemove); 
     }

     return(
          <li>
               <div className="cartImage">
                    <img src={props.image} alt={`board game ${props.name}`} />
               </div>
               <div className="cartText">
                    <h2>{props.name}</h2>
                    <p>{`$${props.price}`}</p>
                    <button
                         onClick={removeItem}
                         className={props.name}>
                         <FontAwesomeIcon
                              icon={faXmark}
                         />
                         Remove
                    </button>    
               </div>     
          </li>
     )
}

export default CartMenu;