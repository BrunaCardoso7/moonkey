import styled from "styled-components"
import { Profile } from "../profile"

const HeaderStyle = styled.header`
    width: 100%;
    height: fit-content;
    padding: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap')
    font-family: "Raleway" !important, sans-serif !important;
    font-weight: 100;
    margin-bottom: 14px;
    user-select: none;
    font-size: 2rem;
    padding: 7px;
    cursor: pointer;
    span{
        color: #D1A300;
    }
`

export default function Header () {
    return (
        <HeaderStyle>
             <Logo>Moon<span>key</span></Logo>
             <Profile/>
        </HeaderStyle>
    )
}