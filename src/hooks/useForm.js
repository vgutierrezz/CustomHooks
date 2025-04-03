import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            //toda la información que esté se va a mantener
            ...formState,
            //Solo se actualiza lo que se modificó
            [name]: value,

        })
    }

    return {
        ...formState,
        onInputChange
    }
}
