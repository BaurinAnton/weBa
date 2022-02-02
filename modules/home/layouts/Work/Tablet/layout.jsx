import { WORK } from './constants'
import style from './style.module.scss'

export const Tablet = ({ handlerButton }) => {
    const workPortfolio = WORK.workTest.map((list) => (
        <div className={style.column}>
            <div className={style.items}>
                <h3>{list.tiile}</h3>
            </div>
            <div className={style.items}>
                <div className={style.box}>
                    <span>{list.description}</span>
                </div>
                <div className={style.box}>
                    <span>{list.price[0].textOne}</span>
                    <span>{list.price[0].textTo}</span>
                    <span>{list.price[0].textThree}</span>
                </div>
            </div>
        </div>
    ))
    return (
        <section className={style.work}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <h2>{WORK.h2}</h2>
                </div>
                <div className={style.row}>
                    {workPortfolio}
                </div>
                <div className={style.row}>
                    <div className={style.column} onClick={handlerButton}>
                        <span>{WORK.discutions[0].cicrleText}</span>
                    </div>
                    <div className={style.column}>
                        <span>{WORK.discutions[0].descriptionOne}</span>
                        <span>{WORK.discutions[0].descriptionTo}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}