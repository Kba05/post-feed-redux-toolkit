import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { postAdded} from './postsSlice'

export const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector( state => state.users)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const onSavePostClicked = () =>{
        if (title && content) {
            dispatch( postAdded(title, content, userId) )
            setTitle('')
            setContent('')
        }
    }

    const usersOptions = users.map( user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section className='postAddSection'>
            <h2>Add a New Post</h2>
            <form className='postForm'>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" name="postTitle" value={title} onChange={onTitleChanged}/>

                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <textarea name="postContent" value={content} onChange={onContentChanged}/>
                
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
            </form>
        </section>
    )
}