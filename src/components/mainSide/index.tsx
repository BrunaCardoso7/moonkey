import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import { HomeOutlined, MenuOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";


const Aside = styled.aside `
    height: 100vh;
    width: fit-content;
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
`
const ButtonMenu = styled.div`
    height: fit-content;
    width: 100%;
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 14px;
    margin-bottom: 14px;
    gap: 30px;
    :hover&&{
        transition: .3s;
        background-color: #E4E3E3;
    }
`
const ButtonTittle = styled.p`
    font-size: 1.5rem;
    width: 100%;
    cursor: pointer;
    user-select: none;
`
const Logo = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap')
    font-family: "Raleway" !important, sans-serif !important;
    font-weight: 300;
    margin-bottom: 14px;
    user-select: none;
    font-size: 2rem;
    span{
        color: #D1A300;
    }
`
const OpenMenu = styled.div`
    display: flex;
    align-items: center;
`
export default function MainAside (){
    const [open, setOpen] = useState(false)

    return (
        <Aside style={open? {width: '300px'} : {width: 'fit-content'}}>
            <OpenMenu>
                <ButtonMenu onClick={()=>setOpen(!open)} style={{width: 'fit-content', marginRight: '30px'}}>
                    <MenuOutlined style={{fontSize: '2rem'}} /> 
                </ButtonMenu>
                {open&& <Logo>Moon<span>key</span></Logo>}
            </OpenMenu>
            <ButtonMenu>
                <HomeOutlined style={{fontSize: '2rem'}}/>    
                {open&&<ButtonTittle>Inicio</ButtonTittle>   }
            </ButtonMenu>
            <ButtonMenu>
                <PlusCircleOutlined style={{fontSize: '2rem'}}/>
                {open&&<ButtonTittle>Novo Produto</ButtonTittle>   }
            </ButtonMenu>
        </Aside>
    )
}   