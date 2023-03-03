import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// import { useGetUserQuery } from "state/api";
import Navbar from "../../components/Navbar";

const Layout = () => {
  // const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //   const userId = useSelector((state) => state.global.userId);
  //   const { data } = useGetUserQuery(userId);

  return (
    <section
    // display={isNonMobile ? "flex" : "block"}
    // width="100%"
    // height="100%"
    >
      {/* <Sidebar
        user={data || {}} // if request gets undefined -> return just {}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      ></Sidebar> */}
      <Navbar
      // user={data || {}}
      // isSidebarOpen={isSidebarOpen}
      // setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet />
    </section>
  );
};

export default Layout;
