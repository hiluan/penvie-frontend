// import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import styled from "styled-components";

const LayoutProtected = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const isNonMobile = useMediaQuery("(min-width: 600px)");
  const { page } = useSelector((state) => state.global);

  return (
    <LayoutContainer>
      {page !== "/" && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
      <div id="outlet-container">
        {page === "/" && (
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
        <Outlet />
      </div>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  /* justify-content: center; */

  #outlet-container {
    position: relative;
    width: 100%;
  }

  /* @media (max-width: 768px) {
    display: block;
  } */
`;

export default LayoutProtected;