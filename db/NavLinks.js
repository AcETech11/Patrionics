import { GoHome } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { LiaToolsSolid } from "react-icons/lia";
import { IoMdContacts } from "react-icons/io";
import { FaProjectDiagram} from 'react-icons/fa'
const navLinks = [
    {
        id: 1,
        title: "Home",
        url: "/",
        icon: <GoHome size={20}/>
    },
    {
        id: 2,
        title: "About",
        url: "/about",
        icon: <CiCircleInfo size={20}/>
    },
    {
        id: 3,
        title: "Services",
        url: "/service",
        icon: <LiaToolsSolid size={20}/>
    },
    {
        id: 4,
        title: "Projects",
        url: "/projects",
        icon: <FaProjectDiagram size={20}/>
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
        icon: <IoMdContacts size={20}/>
    },
];

export default navLinks