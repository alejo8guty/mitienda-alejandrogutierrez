import './style.css';

const Item = ({product}) => {
  return (
    <div className="itemStyle">
        <img alt={product.name} src={product.image} width='150px'/>
        <h2>{product.name}</h2>
        <h2>{product.description}</h2>
        <h2>{product.price}</h2>
        <h2>{product.category}</h2>
        

    </div>
  );
};

export default Item;