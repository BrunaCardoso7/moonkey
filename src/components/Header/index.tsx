import styled from "styled-components"
import { Profile } from "../profile"
import { ButtonMenu, OpenMenu } from "../mainSide"
import { MenuOutlined } from "@ant-design/icons"
import { Dispatch, SetStateAction } from "react"

const HeaderStyle = styled.header`
    width: 100vw;
    height: fit-content;
    padding: 10px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap')
    font-family: "Raleway" !important, sans-serif !important;
    font-weight: 300;
    /* margin-bottom: 14px; */
    user-select: none;
    font-size: 2rem;
    padding:0px;
    cursor: pointer;
    span{
        color: #D1A300;
    }
`

const ConteinerLogoButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
type HeaderProps = {
    setOpen:  Dispatch<SetStateAction<boolean>>,
    open: boolean
}
export default function Header ({ open,setOpen}: HeaderProps) {
    return (
        <HeaderStyle>
            <ConteinerLogoButton>
                <OpenMenu>
                    <ButtonMenu onClick={()=>setOpen(!open)} style={{width: 'fit-content', marginRight: '30px'}}>
                        <MenuOutlined style={{fontSize: '1.5rem'}} /> 
                    </ButtonMenu>
                </OpenMenu>
                <Logo>Moon<span>key</span></Logo>
            </ConteinerLogoButton>
             <Profile/>
        </HeaderStyle>
    )
}