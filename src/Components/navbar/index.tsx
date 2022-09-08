import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './styles-nav.css'

const Navrouter = () => {
    return(
        <header>
            <nav>
                <div>
                    <h1>Coviduana</h1>
                </div>
                <ul>
                    <li>
                        <Link to={'/'}><p>Home</p></Link>
                    </li>
                    <li>
                        <Link to={'/produtos'}><p>Estoque</p></Link>
                    </li>
                    <li>
                        <Link to={'/vendas'}><p>Vendas</p></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navrouter