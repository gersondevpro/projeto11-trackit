import styled from "styled-components"
import logo from "./assets/img/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Initial() {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const navigate = useNavigate()

    function login(event) {
        event.preventDefault()

        const request = {
            email: userEmail,
            password: userPassword
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", request)

        promise.then(() => {
            navigate("/hoje")
        })

        promise.catch((err) => {
            alert(err.response.data.message)
        })
    }

    return (
        <StyledScreen>
            <img src={logo} />
            <StyledForm onSubmit={login}>
                <StyledPlaceholder> {/* email */}
                    <label forhtml="email"></label>
                    <input id="email" name="email" type="email" placeholder="e-mail"
                        onChange={e => setUserEmail(e.target.value)}
                        required
                    />
                </StyledPlaceholder>
                <StyledPlaceholder> {/* password */}
                    <label forhtml="password"></label>
                    <input id="password" name="password" type="password" placeholder="senha"
                        onChange={e => setUserPassword(e.target.value)}
                        required
                    />
                </StyledPlaceholder>
                <button type="submit">Entrar</button>
            </StyledForm>
            <Link to={`/cadastro`}><p>Não tem uma conta? Cadastre-se!</p></Link>
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