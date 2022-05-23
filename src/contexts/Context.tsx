import React, { createContext, useState } from 'react'
//import { ThemeType, themeInitialState, themeReducer } from '../reducers/themeReducer'

type ThemeType = { 
    status: string;
}

type PropsThemeContext = {
    state: ThemeType,
    setState: React.Dispatch<React.SetStateAction<ThemeType>>
}

const DEFAULT_VALUE_THEME = {
    state: { 
        status: 'dark' 
    },
    setState: () => {}
}

const themeContext = createContext<PropsThemeContext>(DEFAULT_VALUE_THEME)

type Props = {
    children: React.ReactNode
}

const ContextProvider: React.FC<Props> = ({ children }) => {
    const [state, setState] = useState( DEFAULT_VALUE_THEME.state );

    return(
        <themeContext.Provider value={{ state, setState }}>
            {children}
        </themeContext.Provider>
    )
}

export default  themeContext ;
export { ContextProvider };