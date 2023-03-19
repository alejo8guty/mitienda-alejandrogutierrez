import { useContext } from 'react';
import { CartContext } from '../../context/CartContex';
import './style.css'

const CartWidget=()=>{
const {cart}=useContext(CartContext);
console.log(cart);


        return(
            <div className='classStyle'>
                <img src='/img/icn-cart.png' alt='carrito'/>
                {cart?.length}
            </div>
        );
    };

    export default CartWidget;