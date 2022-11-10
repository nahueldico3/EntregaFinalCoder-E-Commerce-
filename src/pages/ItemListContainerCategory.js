import data from '../assets/data';
import {Link} from 'react-router-dom';


// LISTADO DE LAS CATEGORIAS - MUESTRA DE TARJETAS


const ItemListContainerCategory = () => {
  return (
    <div>
      <h1>CATEGORIAS DE PRODUCTOS</h1>
      <div>
        <h3>Frutos secos</h3>
        <img src = {data[2].foto} alt="almendras" width={180}/>
        <button><Link to="/ItemDetailsContainer">Ver mas detalles</Link></button>
      </div>
      <div>
        <h3>Cereales</h3>
        <img src = {data[3].foto} alt="almohadas" width={180}/>
        <button><Link to="/ItemDetailsContainer">Ver mas detalles</Link></button>
      </div>
      <div>
        <h3>Galletitas</h3>
        <img src = {data[4].foto} alt="galletitas" width={180}/>
        <button><Link to="/ItemDetailsContainer">Ver mas detalles</Link></button>
      </div>
      <div>
        <h3>Congelados</h3>
        <img src = {data[5].foto} alt="milanesasdesoja" width={180}/>
        <button><Link to="/ItemDetailsContainer">Ver mas detalles</Link></button>
      </div>
    </div>
  )
}

export default ItemListContainerCategory;