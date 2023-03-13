// import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import styled from "styled-components";

const LayoutHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const isNonMobile = useMediaQuery("(min-width: 600px)");
  const { page } = useSelector((state) => state.global);

  return (
    <LayoutContainer>
      <div id="outlet-container">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </div>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;

  #outlet-container {
    position: relative;
    width: 100%;
  }

  /* @media (max-width: 768px) {
    display: block;
  } */
`;

export default LayoutHome;
