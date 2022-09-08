import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PageControle from "../../pages/PageControle";
import PageControleVendas from "../../pages/PageControleVendas";
import PageEdita from "../../pages/PageEdita";
import PageEditaVenda from "../../pages/PageEditaVenda";
import Home from "../../pages/Pagehome";

const Bodypage = () => {
    return (
        <main>
            <Routes>
                <Route 
                path="/"
                element={<Home/>}></Route>

                <Route 
                path="/vendas" 
                element={<PageControleVendas tipoControle='vendas'/>}></Route>

                <Route 
                path="/produtos" 
                element={<PageControle tipoControle='produto'/>}></Route>

                <Route 
                path="/Editproduto/:codigo/:quantidade/:descricao/:preco" 
                element={<PageEdita tipoEdit='Produto'/>}></Route>

                <Route 
                path="/Editvendas/:codigo/:data/:pcodigo/quantidade/:
                ppreco/:pcpf" 
                element={<PageEditaVenda tipoEdit='vendas'/>}></Route>

                <Route 
                path="/EditVenda/:codigo" 
                element={<PageEditaVenda tipoEdit='vendas'/>}></Route>

                <Route 
                path="/Editproduto/:codigo/:QtdProdutos" 
                element={<PageEdita tipoEdit='produto'/>}></Route>
            </Routes>
        </main>
    )
}

export default Bodypage