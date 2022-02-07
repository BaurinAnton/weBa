import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
import Link from 'next/link'

import { FORM } from './constants'
import style from './style.module.scss'

export const FormInProgress = ({ handlerButton, isDoneForm, handlerMenu }) => {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            name,
            tel
        };
        if (!data.tel == '' && !data.name == '') {
            fetch('/api/contact', {
                method: 'post',
                body: JSON.stringify(data)
            })
            isDoneForm()
        }
    }
    const exitForm = () => (
        handlerButton(),
        handlerMenu()
    )
    return (
        <>
            <AnimatePresence>
                <motion.section
                    key="modal"
                    className={style.formFilling}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0 }}>
                    <div className={style.wrapper}>
                        <div className={style.exit} onClick={exitForm}>
                            <span></span>
                            <span></span>
                        </div>
                        <h2>{FORM.h2}</h2>
                        <h3>{FORM.h3}</h3>
                        <form onSubmit={handleSubmit} className={style.form}>
                            <input
                                id="name"
                                type="text"
                                maxLength="25"
                                pattern="^[А-Яа-яЁё\s]+$"
                                placeholder={FORM.form[0].name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                            <input
                                id="tel"
                                type="text"
                                pattern="([\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2})"
                                placeholder={FORM.form[1].tel}
                                onChange={e => setTel(e.target.value)}
                                required />
                            <input
                                type="submit"
                                value={FORM.form[2].buttonText} />
                        </form>
                        <div className={style.socialNetwork}>
                            <Link href={FORM.socialNetwork[0].href}>
                                <a>{FORM.socialNetwork[0].content}</a>
                            </Link>
                            <Link href={FORM.socialNetwork[1].href}>
                                <a>{FORM.socialNetwork[1].content}</a>
                            </Link>
                            <Link href={FORM.socialNetwork[2].href}>
                                <a>{FORM.socialNetwork[2].content}</a>
                            </Link>
                        </div>
                        <div className={style.textPersonal}>
                            <span>{FORM.personalDataText[0].content}</span>
                            <Link href="/privacy">
                                <a onClick={handlerButton}>
                                    <span>{FORM.personalDataText[1].content}</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </motion.section>
                <div className={style.wrapperForm} onClick={exitForm}></div>
            </AnimatePresence>

        </>
    )
}