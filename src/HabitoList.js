import styled from "styled-components"

export default function HabitoList() {
    return (
        <StyledAddHabit>
            <section>
                <h2>Ler 1 capítulo de livro</h2>
            </section>
            <StyledWeekDays>
                <StyledInputsDays><p>D</p></StyledInputsDays>
                <StyledInputsDays><p>S</p></StyledInputsDays>
                <StyledInputsDays><p>T</p></StyledInputsDays>
                <StyledInputsDays><p>Q</p></StyledInputsDays>
                <StyledInputsDays><p>Q</p></StyledInputsDays>
                <StyledInputsDays><p>S</p></StyledInputsDays>
                <StyledInputsDays><p>S</p></StyledInputsDays>
            </StyledWeekDays>
        </StyledAddHabit>
    )
}

const StyledAddHabit = styled.div`
    margin: 0 auto;
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    margin-top: 20px;
    border-radius: 5px;
    section {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 18px;
        h2 {
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            margin-top: 13px;
            color: gray;
        }
    }
`
const StyledWeekDays = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 4px;
    margin-top: 8px;
    margin-left: 18px;
`
const StyledInputsDays = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #D5D5D5;
    }
`