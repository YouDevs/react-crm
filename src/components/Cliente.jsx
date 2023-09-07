function Cliente({cliente}) {

    const {nombre, empresa, email, telefono, id} = cliente

    return (
        <tr className="border-b">
            <td className="p-5 space-y-2">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p className="">{empresa}</p>
            </td>
            <td className="p-5">
                <p className="text-gray-600">
                    Email: <span className="text-gray-800 uppercase font-bold">{email}</span>
                </p>
                <p className="text-gray-600">
                    TEL: <span className="text-gray-800 uppercase font-bold">{telefono}</span>
                </p>
            </td>
            <td className="p-6 flex gap-3">
                <button type="button" className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs">Editar</button>
                <button type="button" className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">Eliminar</button>
            </td>
        </tr>
    )
}

export default Cliente
