import {useState, createContext} from 'react'

interface contextProps {
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoadingContext = createContext<contextProps>({} as contextProps);

export const LoadingProvider = ({children}: {children: React.ReactNode}) => {
    const [loading, setLoading] = useState(true)
    return (
            <LoadingContext.Provider value={{loading, setLoading}}>
                {children}
            </LoadingContext.Provider>
    )
}