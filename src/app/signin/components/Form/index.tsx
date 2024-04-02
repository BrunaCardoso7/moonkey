'use client'
import {
    Input, 
    ButtonPrimary, 
    ConteinerButtons, 
    ConteinerInputs, 
    Logo, 
    Subtitle, 
    Text,     
    Footerbutton, 
    Form, 
    HeaderForm, 
} from '../../style/style'

import { useForm } from "react-hook-form";
import { userAuthFormdata,  } from '../../../../validations/userFormSignup'
import { zodResolver } from '@hookform/resolvers/zod'
import {authUserApi} from '@/api/api';
import Alert  from '@mui/material/Alert';
import { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { AuthContext } from '@/context/authContext';    
import { UserProps } from '@/context/authContext';
import {useRouter} from 'next/navigation'

export default function Formdata ()  {
    const router = useRouter()   
    const [responseData, setResponseData] = useState(false)
    const {login} = useContext(AuthContext)
    const [message, setMessage] = useState('')
    const { register, handleSubmit, formState: {errors} } = useForm<UserProps>({
        resolver: zodResolver(userAuthFormdata)
    })

    const createUser = async (data: UserProps) => {
        console.log('função funcionando')
        try {
            console.log(data)
            const respose = await authUserApi(data)
            setResponseData(true)
            login(respose?.data.user)
            setMessage(respose?.data.message)
            console.log('response from api: ', respose)
            Cookies.set('token', respose?.data.token)
            router.push('/')
        } catch (error) {
            setMessage('Algo deu errado, tente novamente!')
            setResponseData(false)
            console.error(error)
        }
    }
    return (
        <Form onSubmit={handleSubmit(createUser)}>
                {responseData && <Alert variant="outlined" style={{backgroundColor: 'white', position: 'absolute', left: '20px', top: '20px', fontSize: '1.5rem', alignItems: 'center'}} severity="success">{message}</Alert>}
                <HeaderForm>
                    <Logo>Moon<span>key</span></Logo>
                    <Subtitle fontSize={'1.5rem'} color={'#414141'}>Solução poderosa para auxiliar na gestão da sua empresa</Subtitle>
                </HeaderForm>
                <Text fontSize={'2rem'} textAlign={'start'} color={'#000000'}>Olá, Bem vindo novamente</Text>
                <Footerbutton>
                    <ConteinerInputs>
                        <Input 
                            placeholder="E-mail" 
                            type="email"
                            {...register('email')}
                        />
                        {errors.email && <span style={{color: 'red', margin: '-20px 0' }}>{errors.email.message}</span>}
                        <Input 
                            placeholder="Senha" 
                            type="password"
                            {...register('password')}
                        />
                        {errors.password && <span style={{color: 'red', margin: '-20px 0' }}>{errors.password.message}</span>}
                    </ConteinerInputs>
                    <Text fontSize={'.9rem'} textAlign={'center'} color={'#000000'}>Ainda não possui uma conta? <b>não perca tempo</b></Text>
                    <ConteinerButtons>
                        <Link href={'/signup'}>
                            <ButtonPrimary color={"#414141"} backgroundColorHover={'#C3C3C3'} backgroundColor={'#E4E3E3'}>Criar conta</ButtonPrimary>
                        </Link>
                        <ButtonPrimary color={"#F3F3F3"} backgroundColorHover={'#A58000'}backgroundColor={'#D1A300'} type='submit'>Login</ButtonPrimary>
                    </ConteinerButtons>
                </Footerbutton>
            </Form>
    )
}