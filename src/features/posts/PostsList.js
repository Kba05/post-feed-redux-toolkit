import React from "react"
import { useSelector } from "react-redux/es/exports"
import { Link } from 'react-router-dom'
import { PostAuthor } from "./PostAuthor"
import { ReactionButtons } from "./ReactionButtons"
import { TimeAgo } from "./TimeAgo"

export const PostList = () =>{
    const posts = useSelector(state => state.posts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    const renderedPosts = orderedPosts.map(post=>(
        <article key={post.id} className="post">

            <h3>{post.title}</h3>
            <p><TimeAgo timestamp={post.date}/></p> 
            <PostAuthor userId={post.user}/>
            <p>{post.content}</p>
            <ReactionButtons post={post}/>
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