import { createContext, useContext, useState } from "react";
import { token } from "../../lib/token";
import { clearToken } from "../../api/client";

interface AuthContextType {
  isAuth: boolean;
  onLogout: () => void;
}

let AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [isAuth] = useState(!!token);

  const onLogout = () => {
    clearToken();
    return window.location.reload();
  };

  let value = { isAuth, onLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
