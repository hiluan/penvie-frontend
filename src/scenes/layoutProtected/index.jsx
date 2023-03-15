// import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import styled from "styled-components";
import { useGetChatGptQuery } from "state/apiChat";
import { CloseIcon, MenuIcon } from "assets/icons";

const LayoutProtected = ({ accessToken }) => {
  const isMobile = window.innerWidth < 768;
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { page } = useSelector((state) => state.global);
  const { data, isLoading } = useGetChatGptQuery(accessToken);
  // Reset shouldFetchData after data is fetched
  // console.log("🚀 ~ data:", data);
  return (
    <LayoutContainer>
      {page !== "/" && (
        <>
          <SidebarBtn
            isMobile={isMobile}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          {isMobile && isSidebarOpen && (
            <div
              id="sb-shadow"
              onClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
              }}
            ></div>
          )}
          <Sidebar isSidebarOpen={isSidebarOpen} data={data} />
        </>
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

const SidebarBtn = ({ isMobile, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      {isMobile && (
        <button
          id="sb-btn-open"
          onClick={() => {
            console.log(isSidebarOpen);
            setIsSidebarOpen(!isSidebarOpen);
          }}
          style={{
            transform: isSidebarOpen ? "translateX(0)" : "translateX(-230px)",
          }}
        >
          {isSidebarOpen ? <MenuIcon /> : <CloseIcon />}
        </button>
      )}
    </>
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

  #sb-btn-open {
    display: flex;
    position: absolute;
    top: 1rem;
    left: 238px;
    transition: transform 0.1s ease;
    border-radius: 0.375rem;
    border: 1px solid ${(props) => props.theme.background[300]};
    background-color: ${(props) => props.theme.background[200]};
    color: ${(props) => props.theme.grey[500]};
    padding: 0.4rem;
    z-index: 10;
  }

  #sb-shadow {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3px);
    z-index: 5;
    transition: opacity ease 1s;
    z-index: 1;
  }
  /* @media (max-width: 768px) {
    display: block;
  } */
`;

export default LayoutProtected;
