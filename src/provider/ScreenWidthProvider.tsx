import React, {createContext, FC, ReactNode, useContext, useEffect, useState} from 'react';
import { IWithChildren } from '../types/types';

interface ScreenWidthValue {
    screenWidth: number
}

const ScreenWidthContext = createContext<ScreenWidthValue | null>(null)

const ScreenWidthProvider:FC<IWithChildren> = ({ children }) =>  {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const callback = () => setScreenWidth(window.innerWidth)

    console.log(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", callback)

        return () => window.removeEventListener("resize", callback)
    },[])

        return (

        <ScreenWidthContext.Provider value={{
            screenWidth: screenWidth,
        }}>
            {children}
        </ScreenWidthContext.Provider>
    )
}

function useScreenWidth() {
    const context = useContext(ScreenWidthContext);
    if (context === null) {
        throw new Error("useTheme must be used with ScreenWidthProvide")
    }
    else {
        return context
    }
}

export {useScreenWidth, ScreenWidthProvider}