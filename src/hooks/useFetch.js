import React, {useState } from 'react'

export const useFetch = () => {

    const [state, setState] = useState({
        //Inicializa con estos datos harcodeados
        data: null,
        isLoading : true,
        error : null
    })
    
    const {data, isLoading, error} = state

    const FetchData = async (url, method, bodyData = null) => {
        //Si no existe la url que no haga nada
        if(!url) return

        //Si existe:
        try{
            const options = {
                method: method,
                headers : {'Content-type': 'application/json; charset=UTF-8',},
                body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
            }

            const res = await fetch(url, options)
            const data = await res.json()
            setState({
                data,
                isLoading : false,
                error : null
            })
        }
        catch (error) {
            setState({
                data : null,
                error : error,
                isLoading : false,
            })
        }
    }

    return {
        data,
        isLoading,
        error,
        FetchData
    }
}
