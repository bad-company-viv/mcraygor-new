import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "McRAYGOR Mechanicals Infrastructure | Waste Handling Equipment";
  }, []);

  return <RouterProvider router={router} />;
}
