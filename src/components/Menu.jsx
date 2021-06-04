import './menu.css'

import { Link } from 'react-router-dom'

const Menu = props => {
    return (
        <div className="Menu">
            <h2>CRUD - PRODUTOS</h2>

            <h1>Menu</h1>

            <ul>
                <li>
                    <Link to="/produtos">Ver produtos</Link>
                </li>
                <li>
                    <Link to="/cadastro">Gerenciar produtos</Link>
                </li>
            </ul>

        </div>
    )
}

export default Menu