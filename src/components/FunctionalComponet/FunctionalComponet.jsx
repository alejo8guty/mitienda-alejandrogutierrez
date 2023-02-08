import Title from "../Title/Title";

export default function FunctionalComponent(props){
const{name, apodo,number}=props.objeto;
    return(
        <div>
            {/* <h1>Hola soy un componente de {name} y el apodo es {apodo} y numero {number} </h1> */}
            <Title texto="Estoy dentro del componente de function"/>
        </div>
    );
}