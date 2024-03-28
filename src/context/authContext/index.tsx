'use client'
import React, { createContext, useState, useEffect } from "react";
// import { UserAuthProps } from "@/validations/userFormSignup";

export type UserProps = {
    id: string
    nome: string
    email: string
    telefone: string
    password: string
}

type AuthUserProps = {
    login: (data: UserProps) => void
    logout: () => void
    user: UserProps | null
}

const AuthContext = createContext<AuthUserProps>({} as AuthUserProps)

const AuthProvider = ({children}: {children:React.ReactNode})=> {
    const [ user, setUser ] = useState<UserProps | null>(null)

    console.log(user, 'escopo login')

    const login = (data: UserProps) => {
        console.log('dados que chegaram no provider',data)
        return setUser(data);
    }
    const logout = () => {
        console.log('Usuário efetuou logout');
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{
            user,
            login,
            logout
        }}>
           <>
            {children}
           </>
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}
