import React from "react"
import { useSelector } from "react-redux/es/exports"
import { Link } from 'react-router-dom'
import { PostAuthor } from "./PostAuthor"

export const PostList = () =>{
    const posts = useSelector(state => state.posts)
    const renderedPosts = posts.map(post=>(
        <article key={post.id} className="post">

            <h3>{post.title}</h3>
            <PostAuthor userId={post.user}/>
            <p>{post.content}</p>

            <Link to={`/posts/${post.id}`}>
                Open post
            </Link>

        </article>
    ))

    return(
        <section className="postList">
            <h2>
                Posts
            </h2>
            {renderedPosts}
        </section>
    )
}