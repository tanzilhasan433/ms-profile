
import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Shared/NotFound";
import SecondPages from "../Pages/SecondPages/SecondPages";
import Contact from "../Pages/Contact/Contact";
import EducationServicesPage from "../Pages/EducationServicesPage/EducationServicesPage";
import ContactForm from "../Pages/ContactForm/ContactForm";
import GalleryOne from "../Pages/Gallery/GalleryOne";
import GalleryTwo from "../Pages/Gallery/GalleryTwo";
import NavBarGallery from "../Pages/NavbarItems/NavBarGallery";
import Course from "../Pages/NavbarItems/Course";
import Skill from "../Pages/NavbarItems/Skill";
import ProjectsPages from "../Pages/NavbarItems/ProjectsPages";
import Experience from "../Pages/NavbarItems/Experience";
import About from "../Pages/NavbarItems/About";
import Award from "../Pages/NavbarItems/Award";
import Education from "../Pages/NavbarItems/Education";
import Certificate from "../Pages/SubPages/Certificate";

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
            {
                path: 'contact-form',
                element: <ContactForm></ContactForm>
            },
            {
                path: 'gallery-one',
                element: <GalleryOne></GalleryOne>
            },
            {
                path: 'gallery-two',
                element: <GalleryTwo></GalleryTwo>
            },
            {
                path: 'navbar-gallery',
                element: <NavBarGallery></NavBarGallery>
            },
            {
                path: 'course',
                element: <Course></Course>
            },
            {
                path: 'skills',
                element: <Skill></Skill>
            },
            {
                path: 'projects',
                element: <ProjectsPages></ProjectsPages>
            },
            {
                path: 'experience',
                element: <Experience></Experience>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'award',
                element: <Award></Award>
            },
            {
                path: 'navbar-education',
                element: <Education></Education>
            },
            {
                path: 'certificate',
                element: <Certificate></Certificate>
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);