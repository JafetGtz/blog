import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './app/store';
import Navigation from './app/navigation';
import {NetworkProvider} from 'react-native-offline';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
       <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
      </NetworkProvider>
    </Provider>
  );
}

export default App;
