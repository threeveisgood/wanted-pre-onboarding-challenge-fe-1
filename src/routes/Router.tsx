import * as React from "react";
import Auth from "../components/auth";
import Todos from "../components/todos";
import Todo from "../components/todos/[id]";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../hooks/state/useAuth";
import NotFound404 from "../components/404";

const Router: React.FunctionComponent = () => {
  const { isAuth } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
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
            <ProtectedRoute when={isAuth} to="/">
              <Auth />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
