import {
    EPISODES_ROUTE, HOME_ROUTE,
    LOGIN_ROUTE,
    PEOPLE_ROUTE,
    PROFILE_ROUTE,
    SCHEDULE_ROUTE,
    SHOWS_ROUTE,
    SIGN_ROUTE
} from "./utils/consts";
import Sign from "./components/sign/Sign";
import Profile from "./components/profile/Profile";
import Episodes from "./components/episodes/Episodes";
import People from "./components/people/People";
import Schedule from "./components/schedule/Schedule";
import Shows from "./components/shows/Shows";
import Home from "./components/home/Home";

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
        path: EPISODES_ROUTE,
        Component: Episodes
    },
    {
        path: PEOPLE_ROUTE,
        Component: People
    },
    {
        path: SCHEDULE_ROUTE,
        Component: Schedule
    },
    {
        path: SHOWS_ROUTE,
        Component: Shows
    },


]

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: EPISODES_ROUTE,
        Component: Episodes
    },
    {
        path: PEOPLE_ROUTE,
        Component: People
    },
    {
        path: SCHEDULE_ROUTE,
        Component: Schedule
    },
    {
        path: SHOWS_ROUTE,
        Component: Shows
    },
]