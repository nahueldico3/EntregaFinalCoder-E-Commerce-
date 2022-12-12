import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc}  from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "reactclase12.firebaseapp.com",
  projectId: "reactclase12",
  storageBucket: "reactclase12.appspot.com",
  messagingSenderId: "754735470882",
  appId: "1:754735470882:web:c46585133fed71ab78ed7b"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/product.json')
    const product = await promise.json()
    product. forEach(async (prod) => {
        await addDoc (collection(db, "product"), {
            nombre : prod.nombre,
            marca: prod.marca,
            categoria: prod.idcategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

const getProductos = async () => {
    const product = await getDocs(collection(db, "product"))
    const items = product.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
}

const getProducto = async (id) => {
    const prod = await getDoc (doc (db, "product", id))
    const item = {...prod.data(), id: prod.id}
    return item
}

const createProducto = async (objProducto) => {
    const estado = await addDoc (collection(db, "product"), {
        nombre : objProducto.nombre,
        marca: objProducto.marca,
        categoria: objProducto.idCategoria,
        stock: objProducto.stock,
        precio: objProducto.precio,
        img: objProducto.img
    })

    return estado
}


const updateProducto = async(id, info) => {
    const estado = await updateDoc(doc(db, "product",id), info)
    return estado
}

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db,"product", id))
    return estado
}

const getOrdenCompra = async(id) => {
    const item = await getDoc(doc(db, "ordenCompra", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}

export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, getOrdenCompra}