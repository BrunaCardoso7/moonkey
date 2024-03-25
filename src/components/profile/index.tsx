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
`

export function Profile () {
    return (
        <ProfileConteiner>
            <NameProfile>Usuário10209805</NameProfile>
            <Image src="./vetor-de-ícone-perfil-do-avatar-padrão-foto-usuário-mídia-social-183042379.webp" alt="imagem de prefil" />
        </ProfileConteiner>
    )
}