import { useState } from 'react';

import { Header } from '/modules/header'
import { Footer } from '/modules/footer'
import {
  MainSection,
  HelpBusiness,
  Portfolio,
  WhyUs,
  Work,
  Stages,
  ResultWork,
  FeedBack
} from '/modules/home'
import { Form } from '/modules/form'

export default function Home() {
  const [isFormFilling, setIsFormFilling] = useState(false);
  const handlerButton = () => {
    !isFormFilling ? document.body.style.overflow = "hidden" : document.body.style = ''
    return (
      setIsFormFilling(!isFormFilling)
    )
  }
  return (
    <>
      <Header handlerButton={handlerButton} />
      {isFormFilling === true ? <Form handlerButton={handlerButton} /> : ''}
      <MainSection handlerButton={handlerButton} />
      <HelpBusiness />
      <Portfolio />
      <WhyUs handlerButton={handlerButton} />
      <Work handlerButton={handlerButton} />
      <Stages />
      <ResultWork />
      <FeedBack handlerButton={handlerButton} />
      <Footer />
    </>
  )
}
