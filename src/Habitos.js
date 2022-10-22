import { Link } from "react-router-dom"
import styled from "styled-components"
import AddHabito from "./AddHabito"
import HabitoList from "./HabitoList"

export default function Habitos() {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"]

    return (
        <StyledScreen>
            <StyledNavbar>
                <h1>TrackIt</h1>
                <img src="https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj"/>
            </StyledNavbar>

            <StyledHabits>
                <h2>Meus hábitos</h2>
                <div><p>+</p></div>
            </StyledHabits>

            <AddHabito week={week}/>

            <HabitoList/>
            
            <StyledText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</StyledText>


            <StyledFooter>
                <h4>Hábitos</h4>
                <Link to={`/hoje`} style={{textDecoration: 'none'}}>
                    <div><h3>Hoje</h3></div>
                </Link>
                <Link to={`/historico`} style={{textDecoration: 'none'}}>
                    <h4>Histórico</h4>
                </Link>
            </StyledFooter>
        </StyledScreen>
    )
}

const StyledScreen = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #F2F2F2;
`
const StyledNavbar = styled.nav`
    width: 100vw;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1 {
        font-family: 'Playball', cursive;
        font-size: 39px;
        margin-left: 18px;
        color: #FFFFFF;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 25.5px;
        margin-right: 18px;
    }
`
const StyledHabits = styled.div`
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 18px;
    h2 {
        margin-top: 98px;
        font-size: 23px;
        color: #126BA5;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 98px;
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        p {
            font-size: 27px;
            color: #FFFFFF;
        }
    }
`
const StyledText = styled.h3`
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color: gray;
    margin-top: 28px;
    padding: 0px 18px;
    line-height: 22px;
`
const StyledFooter = styled.footer`
    box-sizing: border-box;
    width: 100vw;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 1;
    padding: 0px 36px;
    h4 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #52B6FF;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 92px;
        height: 92px;
        background-color: #52B6FF;
        margin-bottom: 40px;
        border-radius: 46px;
        h3 {
            font-family: 'Lexend Deca', sans-serif;
            font-size: 18px;
            color: #FFFFFF;
        }
    }
`