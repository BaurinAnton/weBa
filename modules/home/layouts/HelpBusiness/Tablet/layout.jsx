import { HELP_BUSINESS } from './constants'
import style from './style.module.scss'

export const Tablet = () => {
    return (
        <section className={style.helpBusiness}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <h2>
                        <span>{HELP_BUSINESS.h2[0].content}</span>
                        <span>{HELP_BUSINESS.h2[1].content}</span>
                    </h2>
                </div>
                <div className={style.row}>
                    <span>{HELP_BUSINESS.description}</span>
                </div>
                <div className={style.row}>
                    <span></span>
                    <span>{HELP_BUSINESS.workText}</span>
                </div>
            </div>
        </section>
    )
}