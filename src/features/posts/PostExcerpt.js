import React from 'react'
import { Link } from 'react-router-dom'
import { PostAuthor } from "./PostAuthor"
import { ReactionButtons } from "./ReactionButtons"
import { TimeAgo } from "./TimeAgo"

export const PostExcerpt = ({ post }) => {
    return (
        <article className="post">
            <h3>{post.title}</h3>
            <div>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
            </div>
            <p>{post.content.substring(0, 100)}</p>
            <ReactionButtons post={post} />
            <Link to={`/posts/${post.id}`} className="button muted-button">
                View Post
            </Link>
        </article>
    )
}