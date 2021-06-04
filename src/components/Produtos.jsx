import './produtos.css'
import fireDb from '../firebase'
import { useEffect, useState } from 'react'

const Produto = props => {

    let [dadosProdutos, setDadosProdutos] = useState({})

    let [idAtual, setIdAtual] = useState('')

    useEffect(() => {
        fireDb.child('produtos').on('value', dbPhoto => {
            if (dbPhoto.val() != null) {
                setDadosProdutos({
                    ...dbPhoto.val()
                })
            }
        })
    }, [])

    const addEdit = obj => {
        fireDb.child('produtos').push(
            obj,
            error => {
                if (error) {
                    console.log(error)
                }
            }
        )
    }

    return (
        <h1>Produto</h1>,
        <div className="Produtos">

            {
                Object.keys(dadosProdutos).map(id => {
                    return <div className="Produto" key={id}>
                        <div className="info">
                            <img src="" alt="" />
                            <p>imagem</p>
                        </div>
                        <div className="partDown">
                            <h2>{dadosProdutos[id].nomeProduto}</h2>
                            <h4>{dadosProdutos[id].categoria}</h4>
                            <div className="total">
                                <h3>TOTAL</h3>
                                <h3>R${dadosProdutos[id].preco}</h3>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default Produto