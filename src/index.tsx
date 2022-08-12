import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Auth from "./components/auth";
import Todos from "./components/todos";
import Todo from "./components/todos/[id]";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./styled/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import GlobalStyle from "./styled/globalStyles";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./lib/redux/store";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="/auth" element={<Auth />} />
                <Route path="/todos" element={<Todos />}>
                  <Route path=":id" element={<Todo />} />
                </Route>
              </Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);
