import { NewProdutoProps } from "@/app/produto/page";
import { UserAuthProps, UserCreatedProps } from "@/validations/userFormSignup";
import axios from "axios";

const url = 'http://localhost:3001'

async function createUserApi (data: UserCreatedProps) {
    try {
        const { nome, email, telefone, password } = data
        const newUser = await axios.post(`${url}/user/signup`, {
            nome,
            email,
            telefone,
            password
        })
        return newUser
    } catch (error) {
        console.error("falha na requisição: "+error)
    }
}
async function authUserApi (data:UserAuthProps) {
    console.log(data)
    try {
        const { email, password } = data
        const authUser = await axios.post(`${url}/user/signin`, {
            email,
            password
        })
        return authUser
    } catch (error) {
        console.error("falha na requisição: "+error)
    }
}

async function createProdutoApi (data: NewProdutoProps) {
    try {
        console.log(data, 'from api')
        const {nome, categoria, preco, quantidade, subcategoria} = data

        const newProduto = await axios.post(`${url}/produto`, {
            nome,
            categoria,
            subcategoria,
            preco,
            quantidade,
        })

        return newProduto   
    } catch (error) {
        console.error("falha na requisição: "+error)
    }
}

export {
    createUserApi,
    authUserApi,
    createProdutoApi
}