import Link from 'next/link'
import { FOOTER } from './constants'
import style from './style.module.scss'

export const Desktop = () => {
    return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <div className={style.column}>
                    <Link href="#">
                        <a className={style.telegram}>
                            <span>{FOOTER.telegram}</span>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className={style.instagram}>
                            <span>{FOOTER.instagram}</span>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className={style.email}>
                            <span>{FOOTER.email}</span>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className={style.arrow}>
                            <span>{FOOTER.arrow}</span>
                        </a>
                    </Link>
                </div>
                <div className={style.column}>
                    <Link href="#">
                        <a>{FOOTER.politics}</a>
                    </Link>
                </div>
                <div className={style.column}>
                    <img src="img/header/logo.svg" alt="" />
                </div>
            </div>
        </footer>
    )
}