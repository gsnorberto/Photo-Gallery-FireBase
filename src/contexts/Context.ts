import { createContext, useReducer } from 'react'
import { ThemeType, themeInitialState, themeReducer } from '../reducers/themeReducer'

type InitialStateType = {
    theme: ThemeType
}

type ContextType = {
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    theme: themeInitialState
}

export const Context = createContext<ContextType>({ 
    state: initialState, dispatch: () => null 
})