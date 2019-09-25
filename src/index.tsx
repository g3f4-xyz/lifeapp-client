import { getJSON as getCookie } from 'js-cookie';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/display/loader/Loader';
import './index.css';

const App = React.lazy(() => import('./components/App'));
const Login = React.lazy(() => import('./components/login/Login'));

const logged: boolean = getCookie('logged');

ReactDOM.render(<Suspense fallback={<Loader />}>{logged ? <App /> : <Login />}</Suspense>, document.getElementById('root'));
