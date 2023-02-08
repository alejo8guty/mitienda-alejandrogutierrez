import './style.css'
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar(){
 
        return(
            <div className='classEstilo'>
                <img src='logo192.png' alt='Logo de marca'/>
                <p>Empresa Gammasol</p>
                <a href='https:wwww.coderhouse.com'>Quienes Somos</a>
                <a href='https:wwww.coderhouse.com'>Nuestros Productos</a>
                <a href='https:wwww.coderhouse.com'>Contacto</a>

            <CartWidget/>
            </div>
        );
    }