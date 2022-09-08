import Itemlist from "../../Components/itemlist";
import './styles-controle.css'
import {AiFillPlusCircle} from 'react-icons/ai'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'



interface props {
    tipoControle: string
}

const PageControle = (props:props) =>{

    const [produtos, setProdutos] = useState<Array<object>>([{}])
    let navigate = useNavigate()

    useEffect(() => {
        //URL CONTROLE
        const url = 'http://localhost:8000/'
        const rotas = {
            allProdutos: 'produtos',
        }

        //Puxa todos os produto do banco
        fetch(url+rotas['allProdutos'],{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
                setProdutos(data)
                
        })
    }, [])

    const handleNavigate = () =>{
        console.log(produtos.length)
        navigate(`/Editproduto/new/${produtos.length}`)
    }


    return(
        <section className="produtos">
            <div className="pageControleContainer">
                <div>
                    <h1 className="titulo">Controle de produtos</h1>
                </div>

                <div className="containerList">
                    <div className="containerButton">
                        <button 
                        onClick={handleNavigate}>
                            <AiFillPlusCircle className="reacticon"/>
                            Produto
                            </button>
                        <input type="text" placeholder={'Pesquisar produto'}/>
                    </div>
                    <div className="containerTextList">
                        <p>Codigo*</p>
                        <p>Estoque*</p>
                        <p>Descrição*</p>
                        <p>Preço*</p>
                    </div>
                    <ul className="listItens">
                        {produtos.map((produto:any) => 
                                <Itemlist
                                key={Number(produto['id'])}
                                tipo={props['tipoControle']}
                                codigo={produto['id']}
                                quantidade={produto['quantidade']}
                                descricao={produto['descricao']}
                                preco={produto['preco']}
                                data={''}
                                cpf={''}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PageControle