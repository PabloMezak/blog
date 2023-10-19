import styles from './styles.module.scss'
import Image from 'next/image'
import logo from 'public/images/logo.svg'
import ActiveLink from '../ActiveLink/index.'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ActiveLink href='/' activeClassName={styles.active}>
                    <Image src={logo} alt="BlogPablo"></Image>
                </ActiveLink>
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        <a>Conteúdo</a>
                    </ActiveLink>
                    <ActiveLink href="/sobre" activeClassName={styles.active}>
                        <a>Sobre</a>
                    </ActiveLink>
                </nav>
                <a type='button' className={styles.readyButton} href="http://google.com/">COMEÇAR</a>
            </div>
        </header>
    )
}