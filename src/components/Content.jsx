import './menu.css'
import { Switch, Route } from 'react-router-dom'

import Cadastro from './Cadastro'
import Produtos from './Produtos'

const Menu = props => {

    return (
        <div className="Content">
            <Switch>
                <Route path="/cadastro">
                    <Cadastro />
                </Route>

                <Route path="/produtos">
                    <Produtos />
                </Route>
            </Switch>
        </div>
    )
}

export default Menu