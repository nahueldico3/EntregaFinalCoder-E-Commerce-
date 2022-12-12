import { cargarBDD, getProductos } from "./api"


export const consultarBDD = async(ruta) => {
    const promise = await fetch(ruta)
    const productos = await promise.json()
        return productos
    }

//cargarBDD()
getProductos().then(data => console.log(data))