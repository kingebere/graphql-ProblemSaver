import React from 'react';
import './index.css';
import ClassCounter from './component/mycomponent'
// import { ApolloProvider } from 'react-apollo';
 import {ApolloClient,ApolloProvider,InMemoryCache,HttpLink} from '@apollo/client'
 import {ApolloProvider as ApolloHooksProvider} from '@apollo/react-hooks'

import AddBooks from './component/AddBooks';
// import ApolloClient from 'apollo-boost'



//apollo setup
const client = new ApolloClient({
  uri:"http://localhost:5000/graphql",
   cache : new InMemoryCache()
});
function App() {
  return (
    <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
     
   <ClassCounter/>
     <AddBooks/>
  
    </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
