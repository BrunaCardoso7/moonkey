
import { HTMLAttributes } from "react";
import styled from "styled-components"

type TextProps = {
    fontSize?: string;
    color?: string;
    textAlign?:string;
} & HTMLAttributes<HTMLParagraphElement>

type ButtonProps = {
    backgroundColor?: string
    backgroundColorHover?: string
} & HTMLAttributes<HTMLButtonElement>

export const ConteinerView = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Form = styled.form`
    width: 100%;
    height: 100vh;
    padding: 0 13%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
`
export const Image = styled.img`
    max-width: 50vw;
    height: 100vh;
    object-fit: cover;
    object-position: right;
`;

export const HeaderForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`
export const Logo = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap')
    font-family: "Raleway" !important, sans-serif !important;
    font-weight: 300;
    font-size: 3rem;
    user-select: none;
    span{
        color: #D1A300;
    }
`
export const Subtitle = styled.p <TextProps>`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap')
    font-family: "Raleway", sans-serif;
    font-size: ${(props) => props.fontSize};
    text-align: ${(props) => props.textAlign};
    user-select: none;
    font-weight: 300;
`
export const Text = styled.p <TextProps>`
    font-size: ${(props) => props.fontSize};
    text-align: ${(props) => props.textAlign};
    user-select: none;
    font-weight: 300;
`
export const Input = styled.input`
    /* margin: 0 20px; */
    height: 60px;
    padding: 10px;
    font-size: 1rem;
    border-radius: 14px;
    :focus&&{
        outline: none;
    }
`
export const ConteinerInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const ConteinerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ButtonPrimary = styled.button<ButtonProps>`
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    padding:14px 24px;
    border: none;
    border-radius: 14px;
    font-size: 1.2rem;
    font-weight: 700;
    :hover&&{
        transition: .3s;
        background-color: ${(props) => props.backgroundColorHover};
    }
` 
export const Footerbutton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`