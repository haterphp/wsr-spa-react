import {useGetPosts} from "./_request.js";
import {useEffect, useState} from "react";
import './index.css'

const IndexPage = () => {

    const [posts, setPosts] = useState([])
    const { emit, isLoading } = useGetPosts(setPosts)

    useEffect(() => {
        emit()
    }, [])

    if(isLoading) return <>Loading...</>

    return (
        <>
            {
                posts.map((post) => (
                    <div className={'card'} key={post.id}>
                        <h3 className="title">{ post.title }</h3>
                        <p className="body">{ post.body }</p>
                    </div>
                ))
            }
        </>
    )
}

export default IndexPage
