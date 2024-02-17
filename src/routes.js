import Home from "./components/Home.tsx";
import PostDetail from "./components/PostDetail.tsx";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "/:id", element: <PostDetail /> },
];

export default routes;
