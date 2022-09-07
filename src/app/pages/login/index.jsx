import {useForm} from "../../common/form/index.js";
import {useEffect} from "react";
import './index.css'

const LoginPage = () => {
    const { registerInput, handleSubmit } = useForm({
        defaultValues: {
            login: "",
            password: ""
        }
    })

    const formSubmitHandler = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(formSubmitHandler)}>
            <h1 style={{ marginBottom: "12px" }}>Вход</h1>
            <input type="text" {...registerInput('login')} />
            <input type="password" {...registerInput('password')} />
            <button type={"submit"}>Войти</button>
        </form>
    )
}

export default LoginPage
