import Head from 'next/head'
import styles from './styles.module.scss'

import Link from 'next/link'
import Image from 'next/image'

import thumbPNG from 'public/images/react.png'
import {FiChevronLeft, FiChevronsLeft,FiChevronRight,FiChevronsRight} from 'react-icons/fi'


export default function Posts() {
    return (
        <>
        <Head>
            <title>Blog | PabloDev++</title>
        </Head>
        <main className={styles.container}>
            <div className={styles.posts}>
                <Link href="/" legacyBehavior>
                    <a>
                        <Image src={thumbPNG} alt='Post Title' width={720}
                        height={410}
                        quality={100}/>
                        <strong>How create a first app with React Js</strong>
                        <time>11/11/1111</time>
                        <p>Creating app or Web Site with react this so easy, You can use react sintax for React Js and React Native</p>
                    </a>
                </Link>
                <div className={styles.buttonNavigate}>
                    <div>
                        <button>
                            <FiChevronsLeft size={25} color="#fff"/>
                        </button>
                        <button>
                            <FiChevronLeft size={25} color="#fff"/>
                        </button>
                    </div>
                    <div>
                        <button>
                            <FiChevronsRight size={25} color="#fff"/>
                        </button>
                        <button>
                            <FiChevronRight size={25} color="#fff"/>
                        </button>
                    </div>
                </div>

            </div>
        </main>
        </>
    )
}