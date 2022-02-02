import Link from 'next/link'
import { PORTFOLIO } from './constants'
import style from './style.module.scss'

export const Mobile = () => {
    const workPortfolio = PORTFOLIO.work.map((list) => (
        <div className={style.work} key={list.id}>
            <Link href="#">
                <a>
                    <span>{list.content}</span>
                </a>
            </Link>
        </div>
    ))
    return (
        <section className={style.portfolio}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <h3>{PORTFOLIO.text}</h3>
                </div>
                <div className={style.row}>
                    {workPortfolio}
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <span>{PORTFOLIO.button}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}