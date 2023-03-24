import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"; 

export const SidebarData = [
    {
        title: 'Basic example ',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Search Bar',
        path: '/search',
        icon: <FaIcons.FaSearch/>,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/users',
        icon: <AiIcons.AiOutlineDatabase/>,
        cName: 'nav-text',
    },
    {
        title: 'To-Do',
        path: '/todo',
        icon: <AiIcons.AiOutlineDatabase/>,
        cName: 'nav-text',
        
    },
]