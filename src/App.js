import React from 'react';
import { AddPostForm } from './features/posts/AddPostForm';
import { PostList } from './features/posts/PostsList';

export const App = ()=> (
  <div className='container'>
        <AddPostForm/>
        <PostList/>
  </div>
)