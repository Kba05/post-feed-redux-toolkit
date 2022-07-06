import React from 'react'
import { useSelector,  } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { PostAuthor} from './PostAuthor'
import { ReactionButtons } from "./ReactionButtons"
import { TimeAgo } from "./TimeAgo"

export const SinglePostPage = () => {
    const { postId } = useParams();
    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    )

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="">
                <h2>{post.title}</h2>
                <p><TimeAgo timestamp={post.date}/></p> 
                <PostAuthor userId={post.user}/>
                <p className="post-content">{post.content}</p>
                <ReactionButtons post={post}/>
                <Link to={`/editPost/${postId}`}>Edit</Link>
                <p></p>
                <Link to={`/`}>to list</Link>
            </article>
        </section>
    )
}