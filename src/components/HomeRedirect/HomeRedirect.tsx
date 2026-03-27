import { Navigate } from "react-router";
import { isLoggedIn } from "../../utils/auth";

export default function LoginGuard({ children }: { children: React.ReactNode }) {
  if (isLoggedIn()) {
    return <Navigate to="/start-journey" replace />;
  }

  return children;
}