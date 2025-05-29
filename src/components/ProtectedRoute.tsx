// src/components/ProtectedRoute.tsx

import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/token"; // 确保路径正确

interface Props {
  children: React.ReactNode; // 改用 React.ReactNode
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const token = getToken();

  if (!token) {
    // 未登录则重定向
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>; // 或者直接 return children;
};

export default ProtectedRoute;
