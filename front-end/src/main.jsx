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
import lojaProvida from './assets/loja-pro-vida.png'
import apneiaPessoas from './assets/apneia-pessoas.png'
import cpapGaslive from './assets/cpap-gaslive.jpg'

// reviews
import avaliacao1 from './assets/avaliacao-1.png'
import avaliacao2 from './assets/avaliacao-2.png'
import avaliacao3 from './assets/avaliacao-3.png'
import avaliacao4 from './assets/avaliacao-4.png'
import avaliacao5 from './assets/avaliacao-5.png'
import avaliacao6 from './assets/avaliacao-6.png'
import avaliacao7 from './assets/avaliacao-7.png'
import avaliacao8 from './assets/avaliacao-8.png'
import avaliacao9 from './assets/avaliacao-9.png'


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
          avaliacao1={avaliacao1}
          avaliacao2={avaliacao2}
          avaliacao3={avaliacao3}
          avaliacao4={avaliacao4}
          avaliacao5={avaliacao5}
          avaliacao6={avaliacao6}
          avaliacao7={avaliacao7}
          avaliacao8={avaliacao8}
          avaliacao9={avaliacao9}
          apneiaPessoas={apneiaPessoas}
          cpapGaslive={cpapGaslive}
          lojaProvida={lojaProvida}
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
