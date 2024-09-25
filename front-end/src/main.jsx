import "./index.css";
import App from './App.jsx'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// importando o Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Home from './pages/Home/Home.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

// images
import banner1 from './assets/banner1.png'
import banner2 from './assets/banner2.png'
import banner3 from './assets/banner3.png'
import banner1sm from './assets/banner1-sm.png'
import banner2sm from './assets/banner2-sm.png'
import banner3sm from './assets/banner3-sm.png'
import provida from './assets/pro-vida.png'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home
          banner1={banner1}
          banner2={banner2}
          banner3={banner3}
          banner1sm={banner1sm}
          banner2sm={banner2sm}
          banner3sm={banner3sm}
          provida={provida}
        />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
