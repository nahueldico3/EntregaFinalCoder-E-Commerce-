//import {} from 'react';
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {consultarBDD} from '../app/funciones'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        if(category){
            consultarBDD('../json/product.json').then(products => {
                const productsList = products.filter(prod => prod.idcategoria === parseInt(category))
                console.log(productsList);
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            consultarBDD('./json/product.json').then(productsList => {
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        }, [category]);
}

export default ItemListContainer;