// useLoaderData sirve para acceder a los datos que retornar en el loader()
import { useLoaderData } from "react-router-dom"

/* 
    Loader es una función que tenemos que exportar.
    y funciona similar a useEffect, se ejecuta cuando el componente carga
    es ideal para cargar un state o consultar alguna API.
    El loader siempre tiene que retoarnar algo.
    React-router-dom espera que se llame Loader y para utilizarlo: ver el código en el main.jsx
*/
export function loader() {
    // Esto se convierte en el state
    const clientes = [ 
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@juan.com",
            empresa: 'Codigo Con Juan'
        },
    ];

    return clientes
}

function Index() {
    // clientes ahora es mi state.
    const clientes = useLoaderData()
    console.log(clientes)

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
            <p className="mt-3">Administra tus clientes</p>
        </>
    )
}

export default Index