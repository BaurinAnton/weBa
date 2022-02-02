import { useState } from 'react'
import { HEADER } from './constants'
import style from './style.module.scss'

export const Desktop = ({ handlerButton }) => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const HeaderConstants = HEADER.list.map((list) => (
        <li key={list.id}>
            <a href="/" className={style.navLink}>{list.content}</a>
        </li>
    ))
    const MenuConstants = HEADER.listMenu.map((list) => (
        <li key={list.id}>
            <a href="/" className={style.navLink} onClick={() => (setIsActiveMenu(!isActiveMenu))}>{list.content}</a>
        </li>
    ))
    const offMenuIsForm = () => {
        handlerButton()
        setIsActiveMenu(!isActiveMenu)
    }
    const onMenu = () => {
        !isActiveMenu ? document.body.style.overflow = "hidden" : document.body.style = ""
        setIsActiveMenu(!isActiveMenu)
    }
    return (
        <>
            <header className={style.header}>
                <div className={style.wrapper}>
                    <div className={style.column}>
                        <img src="img/header/logo.svg" alt="" />
                    </div>
                    <div className={style.column}>
                        <ul>
                            {HeaderConstants}
                        </ul>
                    </div>
                    <div className={style.column}
                        onClick={onMenu}>
                        <span>{HEADER.menu}</span>
                    </div>
                </div>
                <div className={isActiveMenu ? style.onWrapperMenu : style.offWrapperMenu} onClick={onMenu}>
                </div>
                <div className={isActiveMenu ? style.onMenu : style.offMenu}>
                    <div className={style.row}>
                        <div className={style.column}>
                            <ul>
                                {MenuConstants}
                            </ul>
                        </div>
                        <div className={style.column} onClick={onMenu}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.discussProject} onClick={offMenuIsForm}>
                            <span>{HEADER.discussProject}</span>
                        </div>
                        <img src="img/header/arrow.svg" alt="" />
                    </div>
                </div>
            </header>
        </>

    )
}