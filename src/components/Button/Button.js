export default function Button({accion}){
    return(
        <button onClick={()=>{
            accion();
            // alert('Me dieron click');

        }}>Muestra el alert</button>

    );

}