import React, { Children, Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, DarkTheme } from "baseui";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import UserContext from "../utils/UserContext";
//import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./components/Cart";

//const Instamart = lazy(() => import("./components/Instamart"));

const engine = new Styletron();

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Singh",
    age: 22,
  });
  return (
    <>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Provider store={store}>
            <UserContext.Provider value={user}>
              <Header />
              {/** All the children will go into j the Outlet according to the paths  */}
              <Outlet />
              <Footer />
            </UserContext.Provider>
          </Provider>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // It will create path like this - If you put / then react will consider localhost://profile
            element: <Profile />,
          },
        ],
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
