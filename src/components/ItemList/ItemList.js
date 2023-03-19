import Item from "../Item/Item";
import './style.css'
import { Link } from "react-router-dom";

const ItemList = ({productList}) => {
 
  return (
    <div className="itemListStyle">
    {productList.map((product)=>(
      <div key={product.id}>
        <Link to={`/item/${product.id}`}>
          <Item product={product}/>  
        </Link>
      </div>
    ))}
    </div>
  );
};

export default ItemList;