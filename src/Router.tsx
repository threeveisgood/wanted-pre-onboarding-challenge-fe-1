import * as React from "react";
import App from "./App";
import Auth from "./components/auth";
import Todos from "./components/todos";
import Todo from "./components/todos/[id]";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./hooks/state/useAuth";

const Router: React.FunctionComponent = () => {
  const { isAuth } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/todos"
            element={
              <ProtectedRoute when={!isAuth} to="/auth">
                <Todos />
              </ProtectedRoute>
            }
          >
            <Route path=":id" element={<Todo />} />
          </Route>
          <Route
            path="/auth"
            element={
              <ProtectedRoute when={isAuth} to="/todos">
                <Auth />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
