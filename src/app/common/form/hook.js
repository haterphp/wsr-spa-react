import {useCallback, useState} from "react";

const useForm = ({ defaultValues = {} }) => {
    const [formValues, setFormValues] = useState(defaultValues)

    const handleInputChange = (name) => (e) => {
        const type = e.target.type
        switch (type) {
            case 'checkbox':
                setFormValues((prev) => ({ ...prev, [name]: e.target.checked }))
                break
            default:
                setFormValues((prev) => ({ ...prev, [name]: e.target.value }))
                break
        }
    }

    const handleSubmit = (handler) => (e) => {
        e.preventDefault()
        return handler(formValues)
    }

    const registerInput = (name) => {
        return { value: formValues[name] ?? "", onChange: handleInputChange(name) }
    }

    const reset = (values) => setFormValues(values)

    const watch = useCallback((name) => {
        return formValues[name] ?? undefined
    }, [formValues])

    return { formValues, registerInput, reset, watch, handleSubmit }
}

export { useForm }
