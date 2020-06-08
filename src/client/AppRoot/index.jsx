import React from 'react';
import '../css/main.scss';

import { Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import publicRoutes from './routes/public/index';
import Layout from '../components/Layout';

const AppRoot = props => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    ssrForceFetchDelay: 100,
    ssrMode: true
  });
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Layout>
          {publicRoutes.map((route, index) => (
            <Route
              component={route.component}
              path={route.path}
              exact={route.exact}
              key={index}
            />
          ))}
        </Layout>
      </Switch>
    </ApolloProvider>
  );
};

export default AppRoot;
