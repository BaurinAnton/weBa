import { useState } from 'react'
import Link from 'next/link'

import { FormInProgress } from './FormInProgress'
import { FormDone } from './FormDone'
import { FormError } from './FormError'

export const Desktop = ({ handlerButton, handlerMenu }) => {
    const [doneForm, setDoneForm] = useState(undefined)
    const isDoneForm = () => setDoneForm(doneForm = true)
    const isErrorForm = () => setDoneForm(doneForm = false)
    const isErrorInProgressForm = () => setDoneForm(doneForm = undefined)
    return (
        <>
            {
                doneForm === undefined
                    ? <FormInProgress
                        handlerButton={handlerButton}
                        isDoneForm={isDoneForm}
                        isErrorForm={isErrorForm}
                        handlerMenu={handlerMenu} />
                    : doneForm === true
                        ? <FormDone
                            handlerButton={handlerButton}
                            handlerMenu={handlerMenu} />
                        : doneForm === false
                            ? <FormError
                                handlerButton={handlerButton}
                                handlerMenu={handlerMenu}
                                isErrorInProgressForm={isErrorInProgressForm} />
                            : ''
            }
        </>
    )
}