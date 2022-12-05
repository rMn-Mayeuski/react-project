import React, {createContext, FC, ReactNode, useContext, useEffect, useState} from 'react';
import { ScreenWidthContext } from '../context/ScreenWidthContext';
import { IWithChildren } from '../types/types';

const ScreenWidthProvider:FC<IWithChildren> = ({ children }) =>  {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const callback = () => setScreenWidth(window.innerWidth)

    // console.log(window.innerWidth);

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