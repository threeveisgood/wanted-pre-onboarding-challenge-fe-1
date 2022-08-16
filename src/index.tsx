import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./styled/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import GlobalStyle from "./styled/globalStyles";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./lib/redux/store";
import Router from "./components/Router";
import { AuthProvider } from "./hooks/state/useAuth";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router />
          </ThemeProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);
