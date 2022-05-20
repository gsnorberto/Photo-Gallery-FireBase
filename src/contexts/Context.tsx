import React, { createContext, useReducer, useState } from 'react'

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
        status: 'light' 
    },
    setState: () => {}
}

const themeContext = createContext<PropsThemeContext>(DEFAULT_VALUE_THEME)

type Props = {
    children?: React.ReactNode
}

export const themeContextProvider: React.FC = ({ children }: Props) => {
    const [state, setState] = useState({ status: 'light' });

    return(
        <themeContext.Provider value={{ state, setState }}>
            {children}
        </themeContext.Provider>
    )
}

// import { reducerActionType } from '../types/reducerActionType';
// import { createContext, useReducer } from 'react'
// import { ThemeType, themeInitialState, themeReducer } from '../reducers/themeReducer'

// type InitialStateType = {
//     theme: ThemeType
// }

// type ContextType = {
//     state: InitialStateType;
//     dispatch: React.Dispatch<any>;
// }

// const initialState = {
//     theme: themeInitialState
//  }

// export const Context = createContext<ContextType>({ 
//     state: initialState, dispatch: () => null 
// })

// const mainReducer = (state: InitialStateType, action: reducerActionType) => {
//     theme: themeReducer(state.theme, action)
// }

// type Props = {
//     children?: React.ReactNode
// }

// export const ContextProvider: React.FC = ({ children }: Props ) => {
//     const [state, dispatch] = useReducer(mainReducer, initialState);

//     return(
//         <Context.Provider value={{state, dispatch}}>
//             {children}
//         </Context.Provider>
//     )
// }