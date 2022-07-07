import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams ,useNavigate } from 'react-router-dom'
import { postUpdated, selectPostById } from './postsSlice'
import { PostAuthor } from './PostAuthor'

export const EditPostForm = () => {

    const dispatch = useDispatch()
    const nagivate = useNavigate()

    const { postId } = useParams()
    const post = useSelector(state => selectPostById(state, postId))

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onSavePostClicked = () => {
        dispatch(postUpdated({ id: postId, title, content }))
        nagivate(`/posts/${postId}`)
    }

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <PostAuthor userId={post.user}/>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={onTitleChanged}/>

                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}/>
            </form>
            <button type="button" onClick={onSavePostClicked}>
                Save Post
            </button>
        </section>
    )
}
