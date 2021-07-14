import {createContext, useReducer, useEffect} from 'react'
import Reducer from './Reducer'

const INITIAL_SATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
};

export const Context = createContext(INITIAL_SATE);
export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_SATE);

    useEffect(() => {

        localStorage.setItem('user', state.user ? JSON.stringify(state.user) : null);
        
    }, [state.user]);

    return (
        <Context.Provider value= {{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    );
}