import { useState } from 'react'
import Link from 'next/link'

import { FormInProgress } from './FormInProgress'
import { FormDone } from './FormDone'

export const Mobile = ({ handlerButton, handlerMenu }) => {
    const [doneForm, setDoneForm] = useState(false)
    const isDoneForm = () => setDoneForm(!doneForm)
    return (
        <>
            {!doneForm ? <FormInProgress
                handlerButton={handlerButton} isDoneForm={isDoneForm} handlerMenu={handlerMenu}/>
                : <FormDone
                    handlerButton={handlerButton} handlerMenu={handlerMenu}/>}
        </>
    )
}