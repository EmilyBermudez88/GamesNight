//CartMenu.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function CartMenu (props){
     console.log(props)
     return(
          <ul>
               <li>
                    <h2>{props.name}</h2>
                    <p>{props.price}</p>
               </li>

          </ul>
)
}

export default CartMenu;