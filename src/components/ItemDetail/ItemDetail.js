import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContex";


const ItemDetail = ({detail}) => {
const navigate=useNavigate();
const {addItem}=useContext(CartContext);
const [count, setCount]=useState(0);

// const agregarAlCarrito=(event)=>{
//       event.preventDefault();
//       console.log({...detail, quantity:count});
//  };

    return (
    <div style={{
        display:'flex', 
        justifyContent:'center',
        alignItems: 'center',
        padding:'20px',
        flexDirection:'Column'
        }}
        >
        <img src={detail.image} alt={detail.name} width='210px'/>
        <h2>{detail.name}</h2>
        <h2>{detail.description}</h2>
        <h2>{detail.stock}</h2>
        <h2>{detail.price}</h2>
        <h2>{detail.category}</h2>
        <ItemCount count={count} setCount={setCount}/>
        <button onClick={()=>navigate('/')}>Seguir comprando</button>
        <button onClick={()=>addItem(detail, count)} variant="primary">Agregar al carrito</button>
        <button onClick={()=>navigate('/cart')}>Completar mi compra</button>
    </div>
  );
};

export default ItemDetail;