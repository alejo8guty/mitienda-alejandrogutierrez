import { Component } from "react";

class ClassComponent extends Component{
    render(){
        return (
            <div>
                <h1> Hola soy componente de {this.props.apodo}</h1>
            </div>
        );
    }
}


export default ClassComponent;
