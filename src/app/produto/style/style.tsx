import styled from "styled-components"

const PageConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 1;
`
const InputImage = styled.label`
    width: 60%;
    height: 250px;
    border-radius: 14px;
    background-color: #D9D9D9;  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 14px;
`
const InputHidden = styled.input`
    display: none;
`
const ConteinerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const Input = styled.input`

    border: .5px solid gray;
    width: 100%;
    height: 40px;
    padding:  0px 10px;
    font-size: 1rem;
    border-radius: 14px;
    :focus&&{
        outline: none;
    }
`
const Conteinerinput = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: center;
    gap: 10px;
`
const Form = styled.form`
    width: 70vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const DuoInput = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
const TitlePage = styled.h2`
    text-align: center;
    font-weight: 200;
    font-size: 1.8rem;
    color: #414141;
`
const Gambiarra = styled.div`
    display: flex;
    flex-direction: column;
`
export {
    PageConteiner,
    InputImage,
    InputHidden,
    ConteinerForm,
    Conteinerinput,
    Form,
    DuoInput,
    TitlePage,
    Gambiarra
}