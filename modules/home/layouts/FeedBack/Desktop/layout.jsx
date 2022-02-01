import style from './style.module.scss'
import { FEED_BACK } from './constants'

export const Desktop = ({ handlerButton }) => {
    return (
        <section className={style.feedBack}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <div className={style.column}>
                        <h2>{FEED_BACK.h2}</h2>
                    </div>
                    <div className={style.column} onClick={handlerButton}>
                        <span>{FEED_BACK.circleText}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}