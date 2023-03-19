
import './App.css';
// import ClassComponent from './components/ClassComponent/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponet/FunctionalComponet';
// import Title from './components/Title/Title';
// import Button from './components/Button/Button';
// import Formulario from './components/Formulario/Formulario';
// import ParentComponent from './components/ParentComponent/ParentComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListConta/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/ItemListConta/Cart/Cart';
import CartProvider from './context/CartProvider';

function App() {

  // const miObjeto={
  //   name:"Funcion",
  //   apodo:"function",
  //   number: 2,
  // };

  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
         
    </Routes>
    </CartProvider>


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
