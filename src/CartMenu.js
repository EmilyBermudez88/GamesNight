//CartMenu.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function CartMenu (props){

     console.log(props);
     //here we are seeing all the items we added to the cart, plus the handleClick function inside each 

     const removeItem = (e) => {
          const itemToRemove = props.name;
          props.handleClick(itemToRemove); 
     }

     return(
          <ul className="cartMenu">
               <li>
                    <h2>{props.name}</h2>
                    <p>{props.price}</p>
                    <button
                         onClick={removeItem}
                         className={props.name}>
                         
                         <FontAwesomeIcon
                              icon={faXmark} 
                              className="shoppingCart"
                              
                         />
                         Remove From Cart
                    </button>
               </li>
          </ul>
     )
}

export default CartMenu;