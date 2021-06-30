import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';

import store from './store';

import './App.css';

import Layout from './components/Layout/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className=" w-full h-screen homeBG">
          <main className="rsw-container">
            <Layout />
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
