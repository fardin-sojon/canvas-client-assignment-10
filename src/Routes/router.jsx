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
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageArtworks from "../Pages/Dashboard/ManageArtworks";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/recent-artwork`),
      },
      {
        path: "/explore-artwork",
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/artwork`),
        element: <ExploreArtworks />,
      },
      {
        path: "/artworkDetails/:id",
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/artwork/${params.id}`),
        element: (
          <PrivetRoute>
            <ArtworkDetails />
          </PrivetRoute>
        ),
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
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "manage-artworks",
        element: <ManageArtworks />,
      },
      {
        path: "add-artwork",
        element: <AddArtwork />,
      },
      {
        path: "my-gallery",
        element: <MyGallery />,
      },
      {
        path: "my-favorites",
        element: <MyFavorites />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "update-artwork/:id",
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/artwork/${params.id}`),
        element: <UpdateArtwork />,
      },
    ],
  },
]);

export default router;
