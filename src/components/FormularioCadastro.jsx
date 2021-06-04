import { useEffect, useState } from 'react'
import './menu.css'
import './FormularioCadastro.css'
import { storage } from '../firebase'

const FormularioCadastro = props => {

    const camposValoresIniciais = {
        nomeProduto: '',
        preco: '',
        categoria: '',
    }

    let [values, setValues] = useState(camposValoresIniciais)

    useEffect(() => {
        if (props.idAtual == '') {
            setValues({
                ...camposValoresIniciais
            })
        } else {
            setValues({
                ...props.dadosProdutos[props.idAtual]
            })
        }
    }, [props.idAtual, props.dadosProdutos])

    const manipuladorInputChange = e => {
        let { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const manipuladorFormEnvio = e => {
        e.preventDefault()
        props.addEdit(values)
    }

    return (
        <div>
            <h1>Cadastrar produto</h1>
            <form onSubmit={manipuladorFormEnvio}>
                <div className="form-group form-cadastro">

                    <div className="campos">
                        <label htmlFor="">Nome do produto:</label>
                        <input type="text" name="nomeProduto" value={values.nomeProduto} onChange={manipuladorInputChange} />
                    </div>

                    <div className="campos">
                        <label htmlFor="">Preço:</label>
                        <input type="text" name="preco" value={values.preco} onChange={manipuladorInputChange} />
                    </div>

                    <div className="campos">
                        <label htmlFor="">Categoria:</label>
                        <input type="text" name="categoria" value={values.categoria} onChange={manipuladorInputChange} />
                    </div>

                </div>

                <input className="editaProduto" type="submit" value={props.idAtual == '' ? 'Salvar' : 'Atualizar'} className="btn btn-primary" />
                
            </form>
        </div>
    )
}

export default FormularioCadastro