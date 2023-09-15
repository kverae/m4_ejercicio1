import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './contexts/user-context';
import PostList from './components/PostList';
import { createBrowserHistory } from 'history';
import AuthInterceptor from './interceptors/AuthInterceptor';

const history = createBrowserHistory();
export default history;

const router = createBrowserRouter([
  {
      path: "/",
      element: <PostList />
  },
  {
      path: "/login",
      element: <Login />
  },
  {
      path: "/profile",
      element: <Profile />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <AuthInterceptor>
      <RouterProvider router={router} history={history}/>
    </AuthInterceptor>
  </UserContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
