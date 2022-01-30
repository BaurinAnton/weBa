import { useState } from 'react';

import { Header } from '/modules/header'
import { Form } from '/modules/form'

export default function Home() {
  const [isFormFilling, setIsFormFilling] = useState(false);
  const handlerButton = () => (setIsFormFilling(!isFormFilling))
  return (
    <>
      <Header handlerButton={handlerButton} />
      {isFormFilling === true ? <Form handlerButton={handlerButton} /> : ''}
    </>
  )
}
