import { WHY_US } from './constants'
import style from './style.module.scss'

export const Desktop = ({ handlerButton }) => {
    const workPortfolio = WHY_US.column.map((list) => (
        <div className={style.column} id={list.id}>
            <div className={style.items}>
                <h2>{list.title}</h2>
            </div>
            <div className={style.items}>
                <span>{list.description}</span>
            </div>
        </div>
    ))
    return (
        <section className={style.whyUs}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <h2>{WHY_US.h2}</h2>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <span>{WHY_US.columnFirst}</span>
                    </div>
                    {workPortfolio}
                    <div className={style.column} onClick={handlerButton}>
                        <span>{WHY_US.columnLast}</span>
                    </div>
                </div>
                <img src="img/home/WhyUs/arrow.svg" alt="arrow" className={style.arrow} />
            </div>
        </section>
    )
}