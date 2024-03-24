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
import { UserAuthProps, userAuthFormdata,  } from '../../../../validations/userFormSignup'
import { zodResolver } from '@hookform/resolvers/zod'
import {authUserApi} from '@/api/api';
import Alert  from '@mui/material/Alert';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

export default function Formdata ()  {
    const [responseData, setResponseData] = useState(false)
    const [message, setMessage] = useState('')
    const { register, handleSubmit, formState: {errors} } = useForm<UserAuthProps>({
        resolver: zodResolver(userAuthFormdata)
    })

    const createUser = async (data: UserAuthProps) => {
        try {
            const respose = await authUserApi(data)
            setResponseData(true)
            setMessage(respose?.data.message)
            Cookies.set('token', respose?.data.token)
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
                        <ButtonPrimary color={"#F3F3F3"} backgroundColorHover={'#A58000'}backgroundColor={'#D1A300'}>Login</ButtonPrimary>
                    </ConteinerButtons>
                </Footerbutton>
            </Form>
    )
}