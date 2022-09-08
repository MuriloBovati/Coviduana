import '../PageEdita/styles-PageEdit.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
 
interface props {
    tipoEdit: string,
}


const PageEditaVenda = (props:props) =>{

    const navigate = useNavigate()

    const [newQuantidade, setNewQuantidade] = useState<string>()
    const [newData, setNewData] = useState<string>()
    const [newPreco, setNewPreco] = useState<string>()

    const handleAdicionar = () => {
        const newProduto = {
            "data": newData,
            "preco": newPreco,
            "quantidade": newQuantidade
        }
            let url = 'http://localhost:8000/compras'
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
            navigate('/produtos')
    }

    const handleDelete = () => {
        console.log('')
    }

    const handleCancel = () => {
        navigate('/porduto')
    }

    let {codigo, quantidade, descricao} = useParams()

    return(
        <section className="ContainerEdit">
            <div className="editPageContainer">
                <h1 className='editPagetitulo'>{props['tipoEdit']}</h1>
                <div className='editPageConteudo'>
                    <h3>Data</h3>
                    <input 
                    type="text" 
                    placeholder='Ex: 12/15/2022'
                    onChange={(e) => setNewData(e.target.value)} />
                </div>
                <div className='editPageConteudo'>
                    <h3>Quantidade</h3>
                    <input 
                    type="text" 
                    placeholder='Ex: 1' />
                </div>
                <div className='editPageConteudo'>
                    <h3>Preco</h3>
                    <input 
                    type="text" 
                    placeholder='Ex: 1' />
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
export default PageEditaVenda