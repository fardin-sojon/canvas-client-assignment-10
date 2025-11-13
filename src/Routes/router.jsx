import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error404 from "../Pages/Error404";
import Home from "../Pages/Home/Home";
import ExploreArtworks from "../Pages/ExploreArtworks";
import AddArtwork from "../Pages/AddArtwork";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Profile from "../Pages/Profile";
import MyGallery from "../Pages/MyGallery";
import MyFavorites from "../Pages/MyFavorites";
import ArtworkDetails from "../Pages/ArtworkDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import UpdateArtwork from "../Pages/UpdateArtwork";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:5174/recent-artwork"),
      },
      {
        path: "/explore-artwork",
        loader: () => fetch("http://localhost:5174/artwork"),
        element: <ExploreArtworks />,
      },
      {
        path: "/artworkDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5174/artwork/${params.id}`),
        element: (
          <PrivetRoute>
            <ArtworkDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "/add-artwork",
        element: (
          <PrivetRoute>
            <AddArtwork />
          </PrivetRoute>
        ),
      },
      {
        path: "/my-gallery",
        element: (
          <PrivetRoute>
            <MyGallery />
          </PrivetRoute>
        ),
      },
      {
        path: "/my-favorites",
        element: (
          <PrivetRoute>
            <MyFavorites />
          </PrivetRoute>
        ),
      },
      {
        path: "/updateArtwork/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5174/artwork/${params.id}`),
        element: <UpdateArtwork />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
