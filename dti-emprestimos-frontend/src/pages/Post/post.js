    import React, {useState} from "react";
    import { useForm } from "react-hook-form";
    import { yupResolver } from '@hookform/resolvers/yup';
    import * as yup from "yup";
    import './post.css'
    import axios from 'axios';

    const validationPost = yup.object({
        tipoPessoa: yup.string().required("Tipo da pessoa obrigatorio").min(2, "Tipo da pessoa deve ter no mínimo 2 caracteres").max(2, "Tipo da pessoa deve ter no máximo 2 caracteres"),
        documento: yup.string().required("Documento obrigatorio").min(10, "Documento deve ter no mínimo 10 caracteres").max(18, "Documento deve ter no máximo 18 caracteres"),
        nome: yup.string().required("Nome da Pessoa ou Empresa obrigatorio").min(3, "Nome deve ter no mínimo 3 caracteres").max(100, "Nome deve ter no máximo 100 caracteres"),
        numeroDocumento: yup.string().required("Número Documento obrigatorio").min(5,"Número Documento mínimo 5 caracteres").max(18, "Número Documento máximo 18 caracteres"),
        valorDivida: yup.number().required("Valor da dívida obrigatorio").min(1, "Valor da dívida deve conter mínimo 1 número"),
        valorEemprestimo: yup.number().required("Valor do empréstimo obrigatorio").min(1, "Valor do empréstimo deve conter mínimo 1 número"),
    })
    function Post() {
        const { register, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(validationPost)
        });

        const [status, setStatus] = useState({});

        const addPost = data => axios.post("http://localhost:3030/emprestimo", data)
        .then(response => {
            setStatus(response.data);
        })
        .catch((error) => {
            if (error.response && error.response.data && error.response.data.message) {
                setStatus({ message: error.response.data.message });
            } else {
                console.log("Deu tudo errado");
            }
        })

        return(
            <div>
                <main>
                    <div className="card-post">

                        <h1>Criar postagem</h1>

                        <div className="line-post"></div>

                        <div className="card-body-post">
                            <form onSubmit={handleSubmit(addPost)}>
                                <div className="fields">
                                    <input type="text" name="tipoPessoa" placeholder="Tipo da pessoa (PF/PJ)" {...register("tipoPessoa")}/>
                                    <p className="error-message">{errors.tipoPessoa?.message}</p>
                                </div>

                                <div className="fields">
                                    <input type="text" name="documento" placeholder="Documento (CPF/CNPJ)" {...register("documento")}/>
                                    <p className="error-message">{errors.documento?.message}</p>
                                </div>

                                <div className="fields">
                                    <input type="text" name="nome" placeholder="Nome da Pessoa/Empresa" {...register("nome")}/>
                                    <p className="error-message">{errors.nome?.message}</p>
                                </div>

                                <div className="fields">
                                    <input type="text" name="numeroDocumento" placeholder="Número Documento" {...register("numeroDocumento")}/>
                                    <p className="error-message">{errors.numeroDocumento?.message}</p>
                                </div>

                                <div className="fields">
                                    <input type="number" name="valorDivida" placeholder="Valor da dívida ativa atual" {...register("valorDivida")}/>
                                    <p className="error-message">{errors.valorDivida?.message}</p>
                                </div>

                                <div className="fields">
                                    <input type="number" name="valorEemprestimo" placeholder="Valor do empréstimo solicitado" {...register("valorEemprestimo")}/>
                                    <p className="error-message">{errors.valorEemprestimo?.message}</p>
                                </div>

                                <div className="btn-post">
                                    <button type="submit">Enviar</button>
                                </div>
                            </form>

                            <p>{status && status.cpfValido}</p>
                            <p>{status && status.cnpjValido}</p>
                            <p>{status && status.emprestimo}</p>

                            {status && status.message && (
                                <p className="error-message">{status.message}</p>
                            )}


                        </div>
                    </div>
                </main>
            </div>
        );
    };  
    export default Post

