import { useState } from 'react'
import Link from 'next/link'

import { FormInProgress } from './FormInProgress'
import { FormDone } from './FormDone'

export const Mobile = ({ handlerButton }) => {
    const [doneForm, setDoneForm] = useState(false)
    const isDoneForm = () => setDoneForm(!doneForm)
    return (
        <>
            {!doneForm ? <FormInProgress
                handlerButton={handlerButton} isDoneForm={isDoneForm}/>
                : <FormDone
                    handlerButton={handlerButton} />}
        </>
    )
}