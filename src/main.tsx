import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {router} from "./providers/router";
import {apolloClient} from "./providers/apolloClient";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApolloProvider client={apolloClient}>
          <RouterProvider router={router} />
      </ApolloProvider>
  </React.StrictMode>,
)
