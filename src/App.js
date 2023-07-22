import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Body from "./component/Body";
import PageNotFuond from "./component/PageNotFound";
import { Provider } from "react-redux";
import store from "./component/Redux/store";
import Menu from "./component/Menu";
import About from "./component/About";
import Restaurants from "./component/Restaurants";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu/:id",
        element: <Menu />
      }
    ],
    errorElement: <PageNotFuond />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
