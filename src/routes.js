import {
    HOME_ROUTE,
    PROFILE_ROUTE,
    SHOW_PAGE_ROUTE,
    SHOWS_ROUTE,
    SIGN_ROUTE
} from "./utils/consts";
import Sign from "./components/sign/Sign";
import Profile from "./components/profile/Profile";
import Shows from "./components/shows/Shows";
import Home from "./components/home/Home";
import ShowPage from "./components/ShowPage/ShowPage";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: SIGN_ROUTE,
        Component: Sign
    },
    {
        path: SHOWS_ROUTE,
        Component: Shows
    },
    {
        path: SHOW_PAGE_ROUTE + '/:id',
        Component: ShowPage
    },


]

export const privateRoutes = [

    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: SHOWS_ROUTE,
        Component: Shows
    },
    {
        path: SHOW_PAGE_ROUTE + '/:id',
        Component: ShowPage
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
]