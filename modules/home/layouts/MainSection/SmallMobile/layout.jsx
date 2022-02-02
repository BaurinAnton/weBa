import { MAIN_SECTION } from './constants'
import style from './style.module.scss'

export const SmallMobile = ({ handlerButton }) => {
    return (
        <section className={style.mainSection}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <h1>
                        <span>{MAIN_SECTION.h1[0].content}</span>
                        <span>{MAIN_SECTION.h1[1].content}</span>
                        <span>{MAIN_SECTION.h1[2].content}</span>
                        <span>{MAIN_SECTION.h1[3].content}</span>
                    </h1>
                </div>
                <div className={style.row} onClick={handlerButton}>
                    <div className={style.items}>
                        <span>{MAIN_SECTION.circleText}</span>
                    </div>
                    <img src="img/home/MainSection/arrowSmallMobile.svg" alt="" />
                </div>
                <div className={style.row}>
                    <span>{MAIN_SECTION.content}</span>
                </div>
            </div>
        </section>
    )
}