import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from "@chakra-ui/theme";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: "Bearer 5236138daeee3f4bd33465f4b0f7ff", //TODO: need to save this is env or something not public
  },
});

const { Button } = chakraTheme.components;

const theme = extendTheme({
  components: {
    Button,
  },
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ClientContext.Provider value={client}>
        <App />
      </ClientContext.Provider>
    </ChakraProvider>
  </React.StrictMode>
);
