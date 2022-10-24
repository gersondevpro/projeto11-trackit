import { useState } from "react"
import styled from "styled-components"

export default function AddHabito({week}) {
    console.log(week)


    function selectDay(v) {
        console.log(v)
    }

    return (
        <StyledAddHabit>
            <section>
                <label forhtml="email"></label>
                <input id="email" name="email" type="email" placeholder="nome do hábito" onChange={e => (e.target.value)} required
                />
            </section>
            <StyledWeekDays>
                {week.map((value, i) =>
                    <StyledInputsDays
                        key={i}
                        onClick={() => selectDay(value)}
                        > 
                        <p>{value.day}</p>
                    </StyledInputsDays>)}
            </StyledWeekDays>
            <StyledSaveAndCancel>
                <h5>Cancelar</h5>
                <button type="submit"><p>Salvar</p></button>
            </StyledSaveAndCancel>
        </StyledAddHabit>
    )
}

const StyledAddHabit = styled.form`
    margin: 0 auto;
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    margin-top: 20px;
    border-radius: 5px;
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        input {
            box-sizing: border-box;
            width: 303px;
            height: 45px;
            padding: 0px 11px;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            border-radius: 5px;
            border: 1px solid #D5D5D5;
            margin-top: 18px;
            ::placeholder {
                color: #D5D5D5;
            }
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
const StyledSaveAndCancel = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 29px;
    margin-right: 18px;
    gap: 23px;
    button {
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        p {
            font-family: 'Lexend Deca', sans-serif;
            font-size: 16px;
            color: #FFFFFF;
        }
    }
    h5 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        color: #52B6FF;
    }
`