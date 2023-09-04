import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <h1 className="text-6xl font-bold">CRM - React</h1>
            {/* Aquí se inyecta el contenido: */}
            <Outlet />

        </div>
    )
}

export default Layout
