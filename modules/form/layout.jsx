import { useWindowSize } from '/hook'

import { Desktop } from './layouts/Desktop'
import { Tablet } from './layouts/Tablet'
import { Mobile } from './layouts/Mobile'
import { SmallMobile } from './layouts/SmallMobile'

export const Form = ({ handlerButton }) => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width > 1000) ? <Desktop handlerButton={handlerButton} />
                    : (windowSize.width <= 1000 && windowSize.width >= 768) ? <Tablet handlerButton={handlerButton} />
                        : (windowSize.width < 768 && windowSize.width >= 480) ? <Mobile handlerButton={handlerButton} />
                            : (windowSize.width < 480) ? <SmallMobile handlerButton={handlerButton} />
                                : ''
            }
        </>
    )
}