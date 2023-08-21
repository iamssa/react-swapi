import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {Error} from "./pages/Error";
import {PersonDetailPage} from "./pages/PersonDetailPage";
import {PersonListPage} from "./pages/PersonListPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PersonListPage />,
        errorElement: <Error />,
    },
    {
        path: "person/:personId",
        element: <PersonDetailPage />,
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
