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
import EditFlashCardPage from "./pages/EditFlashCardPage.jsx";

/* BrowserRouter for the site. Some routes are siblings instead of children because i want to replace the element not add to it*/
// Ex: :theme/:card and :theme/:card/edit are siblings because otherwise it wouldn't replace the element shown but would add to it.
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
      { path: ":theme/:card/edit", element: <EditFlashCardPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
