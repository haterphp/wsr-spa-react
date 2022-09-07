import {useRequest} from "../../common/http/use-request.js";
import axios from "axios";

const useGetPosts = (setPosts) => {

    const callback = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        await new Promise((resolve) => (setTimeout(() => resolve(true), 1500)))
        return data
    }

    return useRequest(
        callback,
        {
            onSuccess: (data) => {
                setPosts(data)
            }
        }
    )
}

export { useGetPosts }
