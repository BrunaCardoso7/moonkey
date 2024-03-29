import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import { HomeOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Link from "next/link";

type MainAsideProps = {
    open: boolean
}

const Aside = styled.aside `
    height: 100%;
    width: fit-content;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: fixed;
    left: 0;
    top: 70px;
    z-index: 999
`
export const ButtonMenu = styled.div`
    height: fit-content;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 14px;
    gap: 30px;
    :hover&&{
        transition: .3s;
        background-color: #E4E3E3;
    }
`
const ButtonTittle = styled.p`
    font-size: 1.2rem;
    width: 100%;
    cursor: pointer;
    user-select: none;
`
export const OpenMenu = styled.div`
    display: flex;
    align-items: center;
`

export default function MainAside ({open}: MainAsideProps){

    return (
            <Aside style={open? {width: '360px'} : {width: 'fit-content'}}>
                <Link href={'/'} >
                    <ButtonMenu style={!open ? {width: 'fit-content', marginRight: '30px'}: { width: '80%'}}>
                        <HomeOutlined style={{fontSize: '1.5rem'}}/>    
                        {open&&<ButtonTittle>Inicio</ButtonTittle>   }
                    </ButtonMenu>
                </Link>
                <Link href={'produto'}>
                    <ButtonMenu style={!open ? {width: 'fit-content', marginRight: '30px'}: { width: '80%'}}>
                        <PlusCircleOutlined style={{fontSize: '1.5rem'}}/>
                        {open&&<ButtonTittle>Novo Produto</ButtonTittle>   }
                    </ButtonMenu>
                </Link>
            </Aside>    
    )
}   