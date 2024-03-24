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
import { UserCreatedProps, userCreatedFormdata } from '../../../../validations/userFormSignup'
import { zodResolver } from '@hookform/resolvers/zod'
import createUserApi from '@/api/api';
import Alert  from '@mui/material/Alert';
import { CheckBox } from '@mui/icons-material';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

export default function Formdata ()  {
    const [responseData, setResponseData] = useState(false)
    const [message, setMessage] = useState('')
    const { register, handleSubmit, formState: {errors} } = useForm<UserCreatedProps>({
        resolver: zodResolver(userCreatedFormdata)
    })

    const createUser = async (data: UserCreatedProps) => {
        try {
            const respose = await createUserApi(data)
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
                <Text fontSize={'2rem'} textAlign={'center'} color={'#000000'}>Crie sua conta no moonkey</Text>
                <Footerbutton>
                    <ConteinerInputs>
                        <Input 
                            placeholder="Empresa" 
                            type="text"
                            {...register('nome')}
                        />
                        {errors.nome && <span style={{color: 'red', margin: '-20px 0' }}>{errors.nome.message}</span>}
                        <Input 
                            placeholder="E-mail" 
                            type="email"
                            {...register('email')}
                        />
                        {errors.email && <span style={{color: 'red', margin: '-20px 0' }}>{errors.email.message}</span>}
                        <Input 
                            placeholder="Telefone" 
                            type="tel"
                            {...register('telefone')}
                        />
                        {errors.telefone && <span style={{color: 'red', margin: '-20px 0' }}>{errors.telefone.message}</span>}
                        <Input 
                            placeholder="Senha" 
                            type="password"
                            {...register('password')}
                        />
                        {errors.password && <span style={{color: 'red', margin: '-20px 0' }}>{errors.password.message}</span>}
                    </ConteinerInputs>
                    <Text fontSize={'.9rem'} textAlign={'center'} color={'#000000'}>Caso possua conta, já consegue ta realizando o <b>login</b></Text>
                    <ConteinerButtons>
                        <Link href={'/signin'}>
                            <ButtonPrimary color={"#414141"} backgroundColorHover={'#C3C3C3'} backgroundColor={'#E4E3E3'}>fazer login</ButtonPrimary>
                        </Link>
                        <ButtonPrimary color={"#F3F3F3"} backgroundColorHover={'#A58000'}backgroundColor={'#D1A300'}>Criar conta</ButtonPrimary>
                    </ConteinerButtons>
                </Footerbutton>
            </Form>
    )
}