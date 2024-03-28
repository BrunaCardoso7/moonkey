import { z } from "zod"

export const userCreatedFormdata = z.object({
    nome: z.string().min(1, 'Campo obrigatório').transform(nome => {
        return nome.trim().split(' ').map(word => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
        }).join(' ')
    }),
    email: z.string().min(1,'Campo obrigatório').email('Formato de email inválido'),
    telefone: z.string().min(1,'Campo obrigatório'),
    password: z.string().min(1, 'Campo obrigatório'),
})

export type UserCreatedProps = z.infer<typeof userCreatedFormdata>

export const userAuthFormdata = z.object({
    email: z.string().min(1,'Campo obrigatório').email('Formato de email inválido'),
    password: z.string().min(1, 'Campo obrigatório'),
})
export const UserAuthProps = z.object({
    id: z.string().optional(),
    nome: z.string().optional(),
    telefone: z.string().optional(),
    ...userAuthFormdata.shape,
})
export type UserAuthProps = z.infer<typeof userAuthFormdata>