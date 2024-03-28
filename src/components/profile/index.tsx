import { AuthContext } from "@/context/authContext"
import { useContext, useEffect } from "react"
import styled from "styled-components"

const ProfileConteiner = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    user-select: none;
    cursor: pointer;
`
const NameProfile = styled.p`
    font-size: 1.2rem;
    color: #414141;
    user-select: none;
`

export function Profile () {
    const {user} = useContext(AuthContext)

    console.log('esse é o eser retornado no page component',user)

    return (
        <ProfileConteiner>
            <NameProfile>{user?.nome}</NameProfile>
            <Image src="./vetor-de-ícone-perfil-do-avatar-padrão-foto-usuário-mídia-social-183042379.webp" alt="imagem de prefil" />
        </ProfileConteiner>
    )
}