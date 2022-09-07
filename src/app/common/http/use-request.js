import {useState} from "react";

const useRequest = (requestFunction, { onSuccess, onError }) => {
    const [isLoading, setIsLoading] = useState(false)

    const emit = async (data) => {
        try {
            setIsLoading(true)
            const result = await requestFunction(data)
            setIsLoading(false)
            onSuccess && onSuccess(result)
        } catch (e) {
            console.log(e)
            setIsLoading(false)
            onError && onError(e)
        }
    }

    return { emit, isLoading }
}

export { useRequest }
