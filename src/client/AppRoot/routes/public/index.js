// import React from 'react';
// import Loadable from 'react-loadable';
import App from '../../../modules/App';
import Profile from '../../../modules/Profile';

// const Loading = <div>Loading...</div>;

// const App = Loadable({
//   loader: () => import('../../../modules/App'),
//   loading: Loading
// });

// const Profile = Loadable({
//   loader: () => import('../../../modules/Profile'),
//   loading: Loading
// });

const routes = [
  {
    path: '/',
    component: App,
    name: 'App',
    exact: true
  },
  {
    path: '/profile',
    component: Profile,
    name: 'Profile',
    exact: true
  }
];

export default routes;
