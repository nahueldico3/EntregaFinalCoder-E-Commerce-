import data from '../assets/data';
import {Link} from 'react-router-dom';
import ButtonCount from '../components/ButtonCount'

// DETALLE DEL PRODUCTO - PRECIO - AGREGAR Y QUITAR DEL CARRITO - BOTON DE VOLVER

const ItemDetailsContainer = () => {
    return (
        <div>
            <div>
                <h3>Milanesa de Soja</h3>
                <img src = {data[5].foto} alt="milanesasdesoja" width={180}/>
                <b>$320</b>
                <ButtonCount/>
            </div>
        </div>
    )
}

export default ItemDetailsContainer;