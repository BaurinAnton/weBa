import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [windowScroll, setWindowScroll] = useState(
        {
            height: undefined,
            heightBody: undefined,
            heightClient: undefined
        }
    )
    useEffect(() => {
        const handleWindowScroll = () => setWindowScroll(
            {
                height: window.scrollY,
                heightBody: document.body.clientHeight,
                heightClient: window.innerHeight
            }
        )
        handleWindowScroll()
        window.addEventListener("scroll", handleWindowScroll);
        return () => window.removeEventListener("scroll", handleWindowScroll);
    }, [])
    return windowScroll
}