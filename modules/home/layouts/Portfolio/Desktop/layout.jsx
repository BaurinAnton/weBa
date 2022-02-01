import Link from 'next/link'
import { PORTFOLIO } from './constants'
import style from './style.module.scss'

export const Desktop = () => {
    const workPortfolio = PORTFOLIO.work.map((list) => (
        <div className={style.work} key={list.id}>
            <div className={style.prevWork}>
                <img src={list.source} alt="" />
            </div>
            <div className={style.workName}>
                <span>{list.content}</span>
                <div className={style.link}>
                    <Link href="#">
                        <a>
                            <span>{'посмотреть'}</span>
                            <img src="img/home/Portfolio/arrow.svg" alt="" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    ))
    return (
        <section className={style.portfolio}>
            <div className={style.wrapper}>
                <div className={style.column}>
                    <div className={style.text}>
                        <span>{PORTFOLIO.text}</span>
                    </div>
                </div>
                <div className={style.column}>
                    <div className={style.items}>
                        {workPortfolio}
                    </div>
                    <div className={style.items}>
                        <span>{PORTFOLIO.button}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}