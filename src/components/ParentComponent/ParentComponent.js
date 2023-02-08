export default function ParentComponent(props){

    const style={height:'300px', width:'300px',backgroundColor:'red'};
    return (<div style={style}>
        {props.children}
        </div>);
}