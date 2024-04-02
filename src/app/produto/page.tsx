'use client'

import Layout from "@/layout"
import { FileImageOutlined } from "@ant-design/icons"
import { ButtonPrimary } from "../signin/style/style"
import {
    ConteinerForm,
    Conteinerinput,
    DuoInput,
    Form,
    Input,
    InputHidden,
    InputImage,
    PageConteiner,
    TitlePage,
    Gambiarra,
} from './style/style'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

const NewProduto = z.object({
    produto: z.string().min(1),
    categoria: z.string().min(1),
    subcategoria: z.string().min(1),
    quantidade: z.number().min(1),
    preco: z.number().min(1)
})


export type NewProdutoProps = z.infer<typeof NewProduto>

export default function Produto () {
    const {register, handleSubmit, formState: {errors}} = useForm<NewProdutoProps>({
        resolver: zodResolver(NewProduto)
    })

    const createProduct = (data:NewProdutoProps) => {
        console.log(data)
    }

    return (
        <PageConteiner>
            <Layout>
                <Form onSubmit={handleSubmit(createProduct)}>
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
                            <Input placeholder="Nome do produto" {...register('produto')}/>
                            {errors.produto && <span style={{color: 'red' }}>{errors.produto.message}</span>}
                            <Input placeholder="Categoria" {...register('subcategoria')}/>
                            {errors.categoria && <span style={{color: 'red' }}>{errors.categoria.message}</span>}
                            <Input placeholder="Sub categoria" {...register('subcategoria')}/>
                            {errors.subcategoria && <span style={{color: 'red' }}>{errors.subcategoria.message}</span>}
                            <DuoInput>
                            <Gambiarra>
                                <Input placeholder="Quantidade" style={{width:'100%'}} {...register('quantidade')}/>
                                {errors.quantidade && <span style={{color: 'red' }}>{errors.quantidade.message}</span>}
                            </Gambiarra>
                            <Gambiarra>
                                <Input placeholder="Preço" style={{width:'100%'}} {...register('preco')}/>
                                {errors.preco && <span style={{color: 'red' }}>{errors.preco.message}</span>}
                            </Gambiarra>
                            </DuoInput>
                        </Conteinerinput>
                        <ButtonPrimary style={{width: '60%'}} color="#FFFFFF" backgroundColor="#464545" backgroundColorHover="#2C2B2B">Salvar produto</ButtonPrimary>
                    </ConteinerForm>
                </Form>
            </Layout>
        </PageConteiner>
    )
}