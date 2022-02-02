import { useState, useEffect } from 'react';

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(
        {
            width: undefined
        }
    )
    useEffect(() => {
        const handleWindowSize = () => setWindowSize(
            { width: window.innerWidth }
        )
        handleWindowSize()
        window.addEventListener("resize", handleWindowSize);
        return () => window.removeEventListener("resize", handleWindowSize);
    }, [])
    return windowSize
}