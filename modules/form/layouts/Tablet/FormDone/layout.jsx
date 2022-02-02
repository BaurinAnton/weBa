import Link from 'next/link'

import { FORM } from './constants'
import style from './style.module.scss'

export const FormDone = ({ handlerButton }) => {
    return (
        <>
        <section className={style.formFilling}>
            <div className={style.wrapper}>
                <div className={style.exit} onClick={handlerButton}>
                    <span></span>
                    <span></span>
                </div>
                <h2>{FORM.h2}</h2>
                <div className={style.donefullyForm}>
                    <img src="/img/formFilling/checkBox.svg" alt="" />
                    <h3>{FORM.doneText}</h3>
                </div>
                <div className={style.socialNetwork}>
                    <Link href="#">
                        <a>{FORM.socialNetwork[0].content}</a>
                    </Link>
                    <Link href="#">
                        <a>{FORM.socialNetwork[1].content}</a>
                    </Link>
                    <Link href="#">
                        <a>{FORM.socialNetwork[2].content}</a>
                    </Link>
                </div>
                <div className={style.textPersonal}>
                    <span>{FORM.personalDataText[0].content}</span>
                    <span>{FORM.personalDataText[1].content}</span>
                </div>
            </div>
        </section>
        <div className={style.wrapperForm} onClick={handlerButton}></div>
        </>
        
    )
}