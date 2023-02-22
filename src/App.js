
import './App.css';
// import ClassComponent from './components/ClassComponent/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponet/FunctionalComponet';
// import Title from './components/Title/Title';
// import Button from './components/Button/Button';
// import Formulario from './components/Formulario/Formulario';
// import ParentComponent from './components/ParentComponent/ParentComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  // const miObjeto={
  //   name:"Funcion",
  //   apodo:"function",
  //   number: 2,
  // };

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/item/:Id' element={<ItemDetailContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
   
    </Routes>
    </BrowserRouter>
    // <div>

    //     <NavBar/>
    //     <ItemListContainer greeting="Saludos Mundo"/>
      //    <ParentComponent>
      //     <h2>Soy children</h2>
      //     <h3>este es el titulo</h3>
      //     <div>es un subtitulo</div>

      //   </ParentComponent>
      //    <Formulario/>
      //  <Title texto="Dia de componentes"/>
      //    <ClassComponent />
      //   <FunctionalComponent objeto={miObjeto}/> 
      //   <Button accion={()=>alert('Vengo de un callback')}/> 
     //   <Route> path='*' element={<div><h1>Esta pagina no existe</h1></div>}</Route>
    // </div>
  );
}

export default App;
