import styled from "styled-components"
import logo from "./assets/img/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Cadastro() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const navigate = useNavigate()
    
    function addNewUser(event) {
        event.preventDefault()

        const request = {
            email,
            name,
            password,
            image: photo
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", request)

        promise.then(() => {
            navigate("/")
        })

        promise.catch((err) => {
            console.log(err.response.data.message)
        })
    }
    
    return (
        <StyledScreen>
            <img src={logo}/>
            <StyledForm onSubmit={addNewUser}>
                <StyledPlaceholder> {/* email */}
                    <label forhtml="email"></label>
                    <input id="email" name="email" type="email" placeholder="e-mail" onChange={e => setEmail(e.target.value)} required
                    />
                </StyledPlaceholder>
                <StyledPlaceholder> {/* password */}
                    <label forhtml="password"></label>
                    <input id="password" name="password" type="password" placeholder="senha" onChange={e => setPassword(e.target.value)} required
                    />
                </StyledPlaceholder>
                <StyledPlaceholder> {/* name */}
                    <label forhtml="name"></label>
                    <input id="name" name="name" type="text" placeholder="nome" onChange={e => setName(e.target.value)} required
                    />
                </StyledPlaceholder>
                <StyledPlaceholder> {/* photo */}
                    <label forhtml="photo"></label>
                    <input id="photo" name="photo" type="url" placeholder="foto" onChange={e => setPhoto(e.target.value)} required
                    />
                </StyledPlaceholder>
                <button type="submit">Cadastrar</button>
            </StyledForm>
            <Link to={`/`}><p>Já tem uma conta? Faça login!</p></Link>
        </StyledScreen>
    )
}

const StyledScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 180px;
        height: 180px;
        margin-top: 68px;
        margin-bottom: 32px;
    }
    p {
        margin-top: 25px;
    }
`
const StyledForm = styled.form`
    button {
        width: 303px;
        height: 45px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 20px;
        border: none;
        border-radius: 5px;
    }
`
const StyledPlaceholder = styled.div`
    input {
        box-sizing: border-box; // Não funcionou criando um body para a aplicação
        font-size: 20px;
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 15px;
        margin-bottom: 6px;
        ::placeholder {
            color: #D5D5D5;
        }
    }
`