import { createBrowserRouter } from "react-router-dom";
import { AboutMe } from "../screens/AboutMe";
import { Projects } from "../screens/Projects";
import { Experiences } from "../screens/Experiences";
import { Courses } from "../screens/Courses";
import { Contact } from "../screens/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AboutMe/>,
    },
    {
        path: "/projects",
        element: <Projects/>,
    },
    {
        path: "/experiences",
        element: <Experiences/>,
    },
    {
        path: "/courses",
        element: <Courses/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    }
]); 