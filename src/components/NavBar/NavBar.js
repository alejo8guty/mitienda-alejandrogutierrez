import './style.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link , NavLink} from 'react-router-dom';


export default function NavBar(){
 
        return(
            <div className='classEstilo'>
                <div><img src='/img/brand-OKS2.png' alt='Logo de marca'/></div>
                <div >
                    <ul className='menuLista'>
                        <li>
                        <NavLink 
                        className={(estatus)=>
                            estatus.isActive ? 'active':'inactive'
                        }
                         to="/">Nuestros productos</NavLink>    
                        </li>
                        <li>
                        <NavLink 
                          className={(estatus)=>
                            estatus.isActive ? 'active':'inactive'
                        }
                        to="/category/Aceites">Aceites Especiales</NavLink>
                        </li>
                        <li>
                        <NavLink
                         className={(estatus)=>
                            estatus.isActive ? 'active':'inactive'
                        }
                        to="/category/Grasas">Grasas</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                <CartWidget/>
                </div>
               
           
            </div>
        );
    }