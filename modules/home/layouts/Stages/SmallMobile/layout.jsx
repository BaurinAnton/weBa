import { STAGES } from './constants'
import style from './style.module.scss'

export const SmallMobile = () => {
    const stagesDev = STAGES.stages.map((list) => (
        <div className={style.column} key={list.id}>
            <div className={style.items}>
                <span>{list.title}</span>
                <span>{list.symbol}</span>
            </div>
            <div className={style.items}>
                <span>{list.description}</span>
            </div>
        </div>
    ))
    return (
        <section className={style.stages}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <h2>{STAGES.h2}</h2>
                </div>
                <div className={style.row}>
                    {stagesDev}
                    <img src="img/home/Stages/optional.svg" alt="optional" className={style.optional} />
                </div>
            </div>
        </section>
    )
}