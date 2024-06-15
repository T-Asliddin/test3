import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import User from "./components/user";
const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<User />}>

    </Route>)
  );
  return <RouterProvider router={routes} />;
};

export default App;
