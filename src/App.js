import GlobalStyle from "./GlobalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Initial from "./Initial"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"
import Historico from "./Historico"
import Hoje from "./Hoje"

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Initial/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/habitos" element={<Habitos/>}/>
                <Route path="/hoje" element={<Hoje/>}/>
                <Route path="/historico" element={<Historico/>}/>
            </Routes>
        </BrowserRouter>
    )
}

/* const StyledBody = styled.div`
    font-family: 'Roboto', sans-serif;
    position: relative;
    box-sizing: border-box;
` */
