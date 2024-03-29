'use client'

import Layout from "@/layout"
import { FileImageOutlined } from "@ant-design/icons"
import styled from "styled-components"
import { ButtonPrimary } from "../signin/style/style"

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
    gap: 50px;
`
const TitlePage = styled.h2`
    text-align: center;
    font-weight: 200;
    font-size: 1.8rem;
    color: #414141;
`
export default function Produto () {
    return (
        <PageConteiner>
            <Layout>
                <Form>
                    <TitlePage>Cadastre novo produto</TitlePage>    
                    <ConteinerForm>
                        <InputImage htmlFor="imageFile" >
                            <InputHidden type="file" id="imageFile"/> 
                            <FileImageOutlined style={{
                                color: '#414141',
                                fontSize: '2.5rem'
                            }}/>
                            <p>Imagem do produto</p>
                        </InputImage>
                        <Conteinerinput>
                            <Input placeholder="Nome do produto" required/>
                            <Input placeholder="Categoria" required/>
                            <Input placeholder="Sub categoria" />
                            <DuoInput>
                            <Input placeholder="Quantidade" style={{width:'100%'}} required/>
                            <Input placeholder="Preço" style={{width:'50%'}} required/>
                            </DuoInput>
                        </Conteinerinput>
                        <ButtonPrimary style={{width: '60%'}} color="#FFFFFF" backgroundColor="#464545" backgroundColorHover="#2C2B2B">Salvar produto</ButtonPrimary>
                    </ConteinerForm>
                </Form>
            </Layout>
        </PageConteiner>
    )
}