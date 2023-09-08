// Hook para poder navegar entre páginas:
import { useNavigate, Form } from "react-router-dom"
import Formulario from '../components/Formulario'

// El action del Form
export function action() {
    console.log("enviando form.....")
    return 0
}

function NuevoCliente() {

    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">Llena todos los campos para registrar un nuevo cliente.</p>
            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={ () => navigate(-1) }
                >
                    Volver
                </button>
            </div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
                <Form
                    method="POST"

                >
                    <Formulario />
                    <input
                        type="submit"
                        className="mt-5 bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                        value="Registrar Cliente"
                    />
                </Form>
            </div>
        </>
    )
}

export default NuevoCliente
