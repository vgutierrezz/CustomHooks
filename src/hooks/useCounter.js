import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)
    
    const increment = (valor = 1) =>{
        setCounter(counter + valor)
    } 

    const reset = () =>{
        setCounter(initialValue)
    } 

    const decrement = (valor = 1, allowNegative = true) =>{
        if (!allowNegative && counter < 1) return
        setCounter(counter - valor)
    }   

    return {
        counter,
        increment,
        reset,
        decrement
    }
}
 