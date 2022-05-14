import React from 'react';
import {
  
  FaHome,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
import {AiOutlineForm} from 'react-icons/ai';
import {BsCursor} from 'react-icons/bs';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    icon: <BsCursor />,
  },
  {
    id: 3,
    url: '/contact',
    text: 'contact',
    icon: <AiOutlineForm />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/signup',
    text: 'sign up',
    icon: <FaWpforms />,
  },
];

