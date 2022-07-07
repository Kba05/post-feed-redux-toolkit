import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import { store } from './app/store';
import { fetchUsers } from './features/users/usersSlice'
import { App } from './App';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';

import { worker } from './api/server'

async function start() {
   // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' })

  store.dispatch(fetchUsers())
  const container = document.getElementById('root');
  const root = createRoot(container);

  root.render(
    
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='posts/:postId' element={<SinglePostPage />} />
            <Route path='editPost/:postId' element={<EditPostForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>

  );
}

start()