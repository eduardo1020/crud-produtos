import FormularioCadastro from './FormularioCadastro'
import fireDb from '../firebase'
import { useEffect, useState } from 'react'
import './produtos.css'
import { storage } from '../firebase'

const Cadastro = props => {

    let [dadosProdutos, setDadosProdutos] = useState({})

    let [idAtual, setIdAtual] = useState('')

    useEffect(() => {
        fireDb.child('produtos').on('value', dbPhoto => {
            if (dbPhoto.val() != null) {
                setDadosProdutos({
                    ...dbPhoto.val()
                })
            } else {
                setDadosProdutos({})
            }
        })
    }, [])

    const addEdit = obj => {

        if (idAtual == '') {
            fireDb.child('produtos').push(
                obj,
                error => {
                    if (error) {
                        console.log(error)
                    } else {
                        setIdAtual('')
                    }
                }
            )
        } else {
            fireDb.child(`produtos/${idAtual}`).set(
                obj,
                err => {
                    if (err) {
                        console.log('Deu erro')
                    }
                }
            )
        }
    }

    const deleteProduto = key => {
        if (window.confirm('Deseja realmente deleterar este produto?')) {
            fireDb.child(`produtos/${key}`).remove(
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        }
    }

    return (
        <div>
            <div className="formularioCadastro">
                <FormularioCadastro {...({ addEdit, idAtual, dadosProdutos })} />
            </div>

            <div className="Produtos">
                {
                    Object.keys(dadosProdutos).map(id => {
                        return <div className="Produto" key={id}>
                            <div className="info">
                                <p>(imagem do produto)</p>
                            </div>
                            <div className="partDown">
                                <h2>{dadosProdutos[id].nomeProduto}</h2>

                                <h4>{dadosProdutos[id].categoria}</h4>

                                <button type="submit" value="cadastrar" className="btn btn-warning" onClick={() => { setIdAtual(id) }}>Editar</button>
                                <button type="submit" value="cadastrar" className="btn btn-danger" onClick={() => { deleteProduto(id) }}>Excluir</button>

                                <div className="total">
                                    <h3>TOTAL</h3>
                                    <h3>R${dadosProdutos[id].preco}</h3>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Cadastro