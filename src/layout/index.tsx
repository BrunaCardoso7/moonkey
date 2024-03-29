'use client'
import Header from "@/components/Header";
import MainAside from "@/components/mainSide";
import styled from "styled-components";
import { useState } from "react";

const Conteiner = styled.div`
    width: 79%;
    height: 100vh;
    background-color: rgba(128, 128, 128, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
`
const Teste = styled.div`
    display: flex;
    flex-direction: column;
`
const Teste1 = styled.div`
    display: flex;
    justify-content: center;
`

export  default function Layout ({children}: {children: React.ReactNode}) {
    const [open, setOpen] = useState(false)
    return(     
        <Teste>
            <Header open={open} setOpen={setOpen}/>
            <Teste1>
                <MainAside open={open}/>    
                {
                    open&&<Conteiner onClick={()=> setOpen(false)}/>
                }
                {children}
            </Teste1>
        </Teste>
    )
}