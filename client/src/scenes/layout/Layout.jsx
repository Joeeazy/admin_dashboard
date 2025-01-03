import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";
import { useSelector } from "react-redux";

export default function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const userId = useSelector((state) => state.global.userId);

  const { data } = useGetUserQuery(userId)
  console.log("data", data)
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar isNonMobile={isNonMobile}
      drawerWidth= "250px"
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}/>
        <Outlet />
      </Box>
    </Box>
  )
}
