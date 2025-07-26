import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ThemesPage from "./pages/ThemesPage.jsx";
import FlashcardsPage from "./pages/FlashcardsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AddFlashCardPage from "./pages/AddFlashCardPage.jsx";
import ShowFlashCardPage from "./pages/ShowFlashCardPage.jsx";

/* TODO: Accessibility code duplication, useMemo */
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ThemesPage /> },
      {
        path: ":theme",
        element: <FlashcardsPage />,
      },
      {
        path: ":theme/new",
        element: <AddFlashCardPage />,
      },
      { path: "/error", element: <ErrorPage /> },
      { path: ":theme/:card", element: <ShowFlashCardPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
