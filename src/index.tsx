import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Auth from "./components/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./styled/theme";
import { ThemeProvider } from "styled-components";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./slices";
import GlobalStyle from "./styled/globalStyles";

const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/auth" element={<Auth />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
