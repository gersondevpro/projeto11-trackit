import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Historico() {
    return (
        <StyledScreen>
            <StyledNavbar>
                <h1>TrackIt</h1>
                <img src="https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj"/>
            </StyledNavbar>
            <StyledFooter>
                <Link to={`/habitos`} style={{textDecoration: 'none'}}>
                <h4>Hábitos</h4>
                </Link>
                <Link to={`/hoje`} style={{ textDecoration: 'none' }}>
                    <div><h3>Hoje</h3></div>
                </Link>
                <h4>Histórico</h4>
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