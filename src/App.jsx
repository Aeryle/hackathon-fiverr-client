import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import './App.css';
import Layout from './components/Layout/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <div className=" w-full h-screen homeBG">
      <QueryClientProvider client={queryClient}>
        <main className="rsw-container">
          <Layout />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
