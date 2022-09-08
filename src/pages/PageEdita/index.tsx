import './styles-PageEdit.css'
import { useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'

interface props {
    tipoEdit: string,
}

type ids = [
    {
        IdCompras: number,
        IdProdutos: number
    }
]

const PageEdita = (props:props) =>{


    let {codigo, quantidade, descricao, preco, QtdProdutos} = useParams<string>()

    const newNavigate = useNavigate()

    const [newQuantidade, setNewQuantidade] = useState<string>()
    const [newDescricao, setNewDescricao] = useState<string>()
    const [newPreco, setNewPreco] = useState<string>()

    const handleAdicionar = () =>{
        const newProduto = {
            "descricao": newDescricao,
            "preco": newPreco,
            "quantidade": newQuantidade
        }
            let url = 'http://localhost:8000/produtos'
            fetch(url,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduto)
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
            console.log(newProduto)
            newNavigate('/produtos')
    } 

    const handleDelete = () =>{
        const idProdutoDelete = codigo
        fetch('http://localhost:8000/produtos/'+idProdutoDelete, {
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        newNavigate('/produtos')
    }

    const handleCancel = () =>{
        newNavigate('/produtos')
    }


    return(
        <section className="ContainerEdit">
            <div className="editPageContainer">
                <h1 className='editPagetitulo'>{props['tipoEdit']}</h1>
                <div className='editPageConteudo'>
                    <h3>Nome:</h3>
                    <input 
                    type="text"
                    placeholder={descricao} 
                    onChange={(e) => setNewDescricao(e.target.value)} />
                </div>
                <div className='editPageConteudo'>
                    <h3>Estoque:</h3>
                    <input 
                    type="text"
                    placeholder={quantidade}
                    onChange={(e) => setNewQuantidade(e.target.value)}
                    />
                </div>
                <div className='editPageConteudo'>
                    <h3>Preco:</h3>
                    <input 
                    type="text"
                    placeholder={preco}
                    onChange={(e) => setNewPreco(e.target.value)}
                    />
                </div>
                <div className='editPageConstainerButton'>
                    <button className='editPageButton adicionar' onClick={handleAdicionar}>Adicionar</button>
                    <button className='editPageButton cancelar' onClick={handleDelete}>Deletar</button>
                </div>
                <div className='editPageConstainerButton'>
                    <button className='editPageButton' onClick={handleCancel}>Voltar</button>
                </div>
            </div>
        </section>
    )
} 
export default PageEdita