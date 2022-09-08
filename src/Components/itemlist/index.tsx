import './styles-itemlist.css'
import {BsFillPencilFill, BsFillTrashFill} from 'react-icons/bs'
import { Link, useNavigate } from "react-router-dom";


interface item {
    tipo: string,
    codigo: number,
    quantidade: string,
    descricao: string,
    preco: string,
    data: string,
    cpf: string
}



const Itemlist = (props:item) => {

    let urlEdit
    if (props['tipo'] == 'produto'){
        urlEdit = '/Edit' + props['tipo'] + '/' + props['codigo'] + '/' + props['quantidade'] + '/' + props['descricao'] + '/' + props['preco']

    } else{
        urlEdit = ''
    }

    const navigate = useNavigate()

    const handleDelete = () =>{
        const idProdutoDelete = props['codigo']
        fetch('http://localhost:8000/produtos/'+idProdutoDelete, {
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        navigate('/produtos')
    }
    
    return(
        <li className="item">

            <div className="infoItem">
                <p>#{props['codigo']}</p>
                <p>{props['quantidade']}</p>
                <p>{props['descricao']}</p>
                <p>R${Number(props['preco']).toFixed(2)}</p>
            </div>
            
            <div className="buttonItem">
                <Link to={urlEdit}>
                    <BsFillPencilFill className="iconsItem"/>
                    <BsFillTrashFill className="iconsItem trash" />
                </Link>
            </div>
        </li>
    )

}

export default Itemlist