import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import User from "./components/user";
import Singl from "./page/singl-page";
const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
    <Route>
      <Route path="/" element={<User/>} />
      <Route path="/singl/:id" element={<Singl/>}/>
    </Route>)
  );
  return <RouterProvider router={routes} />;
};

export default App;
