import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Collections",
    path: "/collections",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];
