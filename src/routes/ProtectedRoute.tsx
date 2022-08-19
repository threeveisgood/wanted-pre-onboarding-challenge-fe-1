import * as React from "react";
import { Navigate, To, useLocation } from "react-router-dom";

interface IProtectedRouteProps {
  when: boolean;
  children: React.ReactElement;
  to: To;
}

const ProtectedRoute: React.FunctionComponent<IProtectedRouteProps> = ({
  when,
  children,
  to,
}) => {
  let location = useLocation();

  return when ? (
    <Navigate to={to} state={{ from: location }} replace />
  ) : (
    children
  );
};

export default ProtectedRoute;
