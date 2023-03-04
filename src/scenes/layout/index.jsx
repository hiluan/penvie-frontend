// import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import styled from "styled-components";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const isNonMobile = useMediaQuery("(min-width: 600px)");
  // const userId = useSelector((state) => state.global.userId);
  // const { data } = useGetUserQuery(userId);

  return (
    <Bars>
      <Sidebar
        // user={data || {}} // if request gets undefined -> return just {}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      ></Sidebar>
      <div>
        <Navbar
          // user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </div>
    </Bars>
  );
};

const Bars = styled.section`
  /* display: ${(props) => (props.isNonMobile ? "flex" : "block")}; */
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Layout;
