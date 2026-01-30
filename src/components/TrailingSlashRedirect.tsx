import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Redirects URLs with trailing slashes to their non-trailing-slash version.
 * This prevents 404 errors for URLs like /impressum/ -> /impressum
 */
export function TrailingSlashRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if path has a trailing slash (but not just "/")
    if (location.pathname.length > 1 && location.pathname.endsWith("/")) {
      // Remove the trailing slash and redirect
      const newPath = location.pathname.slice(0, -1);
      navigate(newPath + location.search + location.hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
}
