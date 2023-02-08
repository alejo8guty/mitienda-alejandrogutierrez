
import './App.css';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponet/FunctionalComponet';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Formulario from './components/Formulario/Formulario';
import ParentComponent from './components/ParentComponent/ParentComponent';
import NavBar from './components/NavBar/NavBar';

function App() {

  const miObjeto={
    name:"Funcion",
    apodo:"function",
    number: 2,
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {/* <ParentComponent>
          <h2>Soy children</h2>
          <h3>este es el titulo</h3>
          <div>es un subtitulo</div>

        </ParentComponent>
         <Formulario/>
       <Title texto="Dia de componentes"/>
         <ClassComponent />
        <FunctionalComponent objeto={miObjeto}/> 
        <Button accion={()=>alert('Vengo de un callback')}/> */}
      </header>
    </div>
  );
}

export default App;
