import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Login } from "./components/account/Login";
import { Register } from "./components/account/Register";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/account/login',
        element: <Login />
    },
    {
        path: '/account/register',
        element: <Register />
    }
];

export default AppRoutes;
