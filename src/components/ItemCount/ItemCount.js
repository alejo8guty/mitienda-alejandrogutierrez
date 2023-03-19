

const ItemCount = ({count,setCount}) => {
    
    const onAdd=()=>{
        setCount(count+1);
    };
   

    const restar=()=>{
        if (count===0){
            return;
            
        }
        setCount(count-1);
    };

    return (
    <div>
        <h2>{count}</h2>
        <button onClick={onAdd}>+</button>
        <div>
            <span>{count}</span>
        </div>
        <button onClick={restar}>-</button>
    <div>
    </div>
    </div>
  );
};

export default ItemCount;