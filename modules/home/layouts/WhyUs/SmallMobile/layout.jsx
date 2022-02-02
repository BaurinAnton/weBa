import style from './style.module.scss'
import { WHY_US } from './constants'

export const SmallMobile = ({ handlerButton }) => {
    const workPortfolio = WHY_US.column.map((list) => (
        <div className={style.column} id={list.id}>
            <div className={style.items}>
                <h3>{list.title}</h3>
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
                    <div className={style.wrapperTitle}>
                        <div className={style.column}>
                            <span>{WHY_US.columnFirst}</span>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.wrapperWork}>
                        {workPortfolio}
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.wrapperCircle}>
                        <div className={style.column} onClick={handlerButton}>
                            <span>{WHY_US.columnLast}</span>
                        </div>
                        <div className={style.column}>
                            <img src="img/home/WhyUs/arrowSmallMobile.svg" alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}