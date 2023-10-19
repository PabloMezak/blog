import Link, { LinkProps } from "next/link";
import { useRouter } from 'next/router'
import { ReactElement, cloneElement } from 'react'
interface ActiveLinkProps extends LinkProps {
    children: ReactElement
    activeClassName: string
}

export default function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {

    // Esse componente recebe 3 propriedade, 
    // 1. O Children para poder pegar oque estiver escrito dentro do componente. 
    // 2. O activeClassName que é uma class que quando ativada ele ativa um scss proprio. 
    // 3. O Link/Href que e recebido atraves do useRouter do next/Router.


    //AsPasth analiza qual URL(depois do barra) o usuario está
    const { asPath } = useRouter() // Ele vai acessar a pagina que o usuario está

    const className = asPath === rest.href ? activeClassName : "" //Se a rota/pagina que estamos acessando for igual ao link que ele clicou então ativamos o ActiveClassName
    return (
        <Link legacyBehavior {...rest}>
            {cloneElement(children, {
                className
            })}
        </Link>
    )
}