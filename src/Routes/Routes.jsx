
import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Shared/NotFound";
import SecondPages from "../Pages/SecondPages/SecondPages";
import Contact from "../Pages/Contact/Contact";
import EducationServicesPage from "../Pages/EducationServicesPage/EducationServicesPage";

      export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'second-page',
                element: <SecondPages></SecondPages>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'education',
                element: <EducationServicesPage></EducationServicesPage>
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);