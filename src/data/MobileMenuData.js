import React from "react"
import * as FaIcons from "react-icons/fa"
import { FaAngleDown } from "react-icons/fa"

export const MobileMenuData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    submenu: [],
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaUserAlt />,
    submenu: [],
  },
  {
    title: "Menu",
    path: "#",
    icon: <FaIcons.FaFileAlt />,
    submenu: [
      {
        title: "Breakfast Menu",
        path: "/menu/breakfast-menu",
        icon: <FaAngleDown />,
      },
      {
        title: "Lunch Menu",
        path: "/menu/lunch-menu",
        icon: <FaAngleDown />,
      },
    ],
  },
  {
    title: "Location",
    path: "/#",
    icon: <FaIcons.FaMapMarkerAlt />,
    submenu: [
      {
        title: "Location One",
        path: "/location/location-one",
        icon: <FaAngleDown />,
      },
      {
        title: "Location Two",
        path: "/location/location-two",
        icon: <FaAngleDown />,
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    submenu: [],
  },
]
