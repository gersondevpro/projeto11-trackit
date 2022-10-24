import GlobalStyle from "./GlobalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Initial from "./Initial"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"
import Historico from "./Historico"
import Hoje from "./Hoje"
import Variable from "./context/UseContext"
import { useState } from "react"

export default function App() {
    const [user, setUser] = useState({})

    return (
        <Variable.Provider value={{user, setUser}}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Initial />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                    <Route path="/historico" element={<Historico />} />
                </Routes>
            </BrowserRouter>
        </Variable.Provider>
    )
}

/* const StyledBody = styled.div`
    font-family: 'Roboto', sans-serif;
    position: relative;
    box-sizing: border-box;
` */
