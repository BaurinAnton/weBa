import { motion } from 'framer-motion';

import Link from 'next/link'
import { PORTFOLIO } from './constants'
import style from './style.module.scss'

export const Desktop = () => {
    const workPortfolio = PORTFOLIO.work.map((list) => (
        <div className={style.work} key={list.id}>
            <div className={style.prevWork}>
                <img src={list.source} alt="" />
            </div>
            <div className={style.workName}>
                <span>{list.content}</span>
                <div className={style.link}>
                    <Link href="#">
                        <a>
                            <span>{'посмотреть'}</span>
                            <img src="img/home/Portfolio/arrow.svg" alt="" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    ))
    return (
        <section className={style.portfolio}>
            <div className={style.wrapper}>
                <motion.div
                    className={style.column}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }}>
                    <div className={style.text}>
                        <span>{PORTFOLIO.text}</span>
                    </div>
                </motion.div>
                <motion.div
                    className={style.column}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={{
                        visible: { opacity: 1, marginTop: 0 },
                        hidden: { opacity: 0, marginTop: '3.125em' }
                    }}>
                    <div className={style.items}>
                        {workPortfolio}
                    </div>
                    <div className={style.items}>
                        <span>{PORTFOLIO.button}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}