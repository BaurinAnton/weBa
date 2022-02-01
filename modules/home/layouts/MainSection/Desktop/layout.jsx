import { Wave } from 'react-animated-text';

import style from './style.module.scss'
import { MAIN_SECTION } from './constants'

export const Desktop = ({ handlerButton }) => {
    return (
        <section className={style.MainSection}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <div className={style.column}>
                        <h1>
                            <span>{MAIN_SECTION.h1[0].content}</span>
                            <span>{MAIN_SECTION.h1[1].content}</span>
                            <span>{MAIN_SECTION.h1[2].content}</span>
                        </h1>
                    </div>
                    <div className={style.column} onClick={handlerButton}>
                        <span>{MAIN_SECTION.circleText}</span>
                    </div>
                    <img src="/img/home/MainSection/arrow.svg" alt="arrow" />
                </div>
                <div className={style.row}>
                    <span>{MAIN_SECTION.h2[0].content}</span>
                    <span>{MAIN_SECTION.h2[1].content}</span>
                </div>
            </div>
        </section>
    )
}