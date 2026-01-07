import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    let title = "Lotus";

    if (path === "/") title = "Home | Lotus";
    else if (path === "/about") title = "About | Lotus";
    else if (path === "/games") title = "Games | Lotus";
    else if (path.startsWith("/game/")) title = "Game Details | Lotus";
    else if (path === "/login") title = "Login | Lotus";
    else if (path === "/register") title = "Register | Lotus";
    else if (path === "/profile") title = "Profile | Lotus";

    document.title = title;
  }, [location]);

  return null;
}
