import { createContext, useContext, useEffect, useState } from "react"
import { getTotalNotOnFloor } from "../../productController"

interface NOFObject {
    NOF: number
}

//Creating NOF context
const NOFContext = createContext<NOFObject | null>(null)

export const useNOFContext = () => {
    const objectNOF = useContext(NOFContext)
    if (!objectNOF) {
        throw new Error("useNOFObject must be used within a Provider")
    }
    return objectNOF
}



function NOFProvider({ children }: { children: React.ReactNode }) {

    //fetching NOF value from database
    useEffect(() => {
        async function fetchNOF() {
            setNOFValue(await getTotalNotOnFloor())
        }
        fetchNOF()
    }, [])

    const [nofValue, setNOFValue] = useState<number>(0)

    //creating NOF object
    const obj: NOFObject = {
        NOF: nofValue
    }

    return (
        //added the provider so that every component and page can access NOF value
        <NOFContext.Provider value={obj}>
            {children}
        </NOFContext.Provider>
    )
}

export default NOFProvider