import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css';
import { store } from './app/store';
import {App} from './App';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='posts/:postId' element={<SinglePostPage/>}/>
            <Route path='editPost/:postId' element={<EditPostForm/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
