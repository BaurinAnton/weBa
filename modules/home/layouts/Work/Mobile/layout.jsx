import { motion } from 'framer-motion';

import { WORK } from './constants'
import style from './style.module.scss'

export const Mobile = ({ handlerButton }) => {
    const workPortfolio = WORK.workTest.map((list) => (
        <motion.div className={style.column}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
                visible: { opacity: 1, translateY: '0px' },
                hidden: { opacity: 0, translateY: '50px' }
            }}>
            <div className={style.items}>
                <h3>{list.tiile}</h3>
            </div>
            <div className={style.items}>
                <span>{list.description}</span>
            </div>
            <div className={style.items}>
                <span>{list.price[0].textOne}</span>
                <span>{list.price[0].textTo}</span>
                <span>{list.price[0].textThree}</span>
            </div>
        </motion.div>
    ))
    return (
        <section className={style.work}>
            <div className={style.wrapper}>
                <motion.div className={style.row}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0px' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }}>
                    <h2>{WORK.h2}</h2>
                </motion.div>
                <div className={style.row}>
                    {workPortfolio}
                </div>
                <motion.div className={style.row}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    variants={{
                        visible: { opacity: 1, translateY: '0px' },
                        hidden: { opacity: 0, translateY: '50px' }
                    }}>
                    <div className={style.wrapper}>
                        <div className={style.column} onClick={handlerButton}>
                            <span>{WORK.discutions[0].cicrleText}</span>
                        </div>
                    </div>
                    <div className={style.column}>
                        <span>{WORK.discutions[0].descriptionOne}</span>
                        <span>{WORK.discutions[0].descriptionTo}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}