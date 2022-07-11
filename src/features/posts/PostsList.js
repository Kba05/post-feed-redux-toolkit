import React, { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import { fetchPosts, selectAllPosts } from './postsSlice'
import { PostExcerpt} from './PostExcerpt'
import { Spinner } from '../../components/Spinner'

export const PostList = () =>{
    console.log("post list called")
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector( state => state.posts.status)
    const error = useSelector(state => state.posts.error)

    useEffect(()=>{
        if (postStatus === "idle"){
            dispatch(fetchPosts())
        }

        // fetch("/browse/Categories",{
        //     method: "GET",
        //     headers:{
        //        Authorization: "Basic YWxleDphbGV4s"
        //     }
        // }).then(res => res.json()).then((result) => { console.log(result.value[0].Text)},(error) => {console.log(error)})

    },[postStatus, dispatch])

    let content;

    if(postStatus === 'loading') {
        content = <Spinner text="Loading..." />
    }else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostExcerpt key={post.id} post={post} />)
    }else if (postStatus === 'failed') {
        content = <div>{error}</div>
    }

    return(
        <section className="postList">
            <h2>
                Posts
            </h2>
            {content}
        </section>
    )
}