import { HELP_BUSINESS } from './constants'
import style from './style.module.scss'

export const Desktop = () => {
    return (
        <section className={style.helpBusiness}>
            <div className={style.wrapper}>
                <div className={style.column}>
                    <h2>
                        <span>{HELP_BUSINESS.h2[0].content}</span>
                        <span>{HELP_BUSINESS.h2[1].content}</span>
                        <span>{HELP_BUSINESS.h2[2].content}</span>
                        <span>{HELP_BUSINESS.h2[3].content}</span>
                    </h2>
                </div>
                <div className={style.column}>
                    <div className={style.items}>
                        <span>{HELP_BUSINESS.description}</span>
                    </div>
                    <div className={style.items}>
                        <span></span>
                        <span>{HELP_BUSINESS.workText}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}