import { RESULT_WORK } from './constants'
import style from './style.module.scss'

export const Mobile = () => {
    const result = RESULT_WORK.column.map((list) => (
        <div className={style.column} key={list.id}>
            <div className={style.items}>
                <h3>{list.title}</h3>
            </div>
            <div className={style.items}>
                <span>{list.description}</span>
            </div>
        </div>
    ))
    return (
        <section className={style.resultWork}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <h2>{RESULT_WORK.h2}</h2>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <span>{RESULT_WORK.columnFirst}</span>
                    </div>
                    {result}
                </div>
            </div>
        </section>
    )
}