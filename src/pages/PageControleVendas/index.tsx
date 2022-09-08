import React from "react";
import Itemlist from "../../Components/itemlist";
import '../PageControle/styles-controle.css'
import {AiFillPlusCircle} from 'react-icons/ai'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'



interface props {
    tipoControle: string
}

const PageControleVendas = (props:props) =>{

    const [vendas, setVendas] = useState<Array<object>>([{}])
    let navigate = useNavigate()

    useEffect(() => {
        //URL CONTROLE
        const url = 'http://localhost:8000/'
        const rota = 'compras'

        //Puxa todos os produto do banco
        fetch(url+rota,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
                setVendas(data)
                console.log(vendas)
        })
    }, [])


    return(
        <section className="produtos">
            <div className="pageControleContainer">
                <div>
                    <h1 className="titulo">Controle de Vendas</h1>
                </div>

                <div className="containerList">
                    <div className="containerButton">
                        <button 
                        onClick={()=> {navigate("/EditVenda/new")}}>
                            <AiFillPlusCircle 
                            className="reacticon"/>Vendas
                        </button>
                        <input type="text" placeholder={'Pesquisar venda'}/>
                    </div>
                    <div className="containerTextList">
                        <p>Codigo*</p>
                        <p>Quantidade*</p>
                        <p>Data*</p>
                        <p>Preço*</p>
                    </div>
                    <ul className="listItens">
                        {vendas.map((venda:any)=>
                                <Itemlist
                                key={Number(venda['id'])}
                                tipo={props['tipoControle']}
                                codigo={venda['id']}
                                quantidade={venda['pquantidade']}
                                descricao={venda['pdata']}
                                preco={venda['ppreco']}
                                data={venda['pdata']}
                                cpf={venda['pcpf']}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PageControleVendas