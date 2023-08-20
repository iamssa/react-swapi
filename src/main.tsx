import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {Error} from "./pages/Error";
import {PersonDetail} from "./pages/PersonDetail";
import {PersonList} from "./pages/PersonList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PersonList />,
        errorElement: <Error />,
    },
    {
        path: "person/:personId",
        element: <PersonDetail />,
    },
]);

const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <RouterProvider router={router} />
      </ApolloProvider>
  </React.StrictMode>,
)
