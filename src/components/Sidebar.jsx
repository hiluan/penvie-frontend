import { useDispatch, useSelector } from "react-redux";
import translations from "../languages/translations.json";
import styled from "styled-components";
import { themes } from "theme";
import {
  DocIcon,
  HomeIcon,
  Logout,
  Moon,
  PenLogo,
  PlusIcon,
  Sun,
  TrashIcon,
  UserIcon,
} from "assets/icons";
import { setMode } from "state";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { mode, language } = useSelector((state) => state.global);
  const theme = themes[mode];
  const lang = translations[language];
  const testItems = [
    {
      text: "Dashboard Client Facing Dashboard Dashboard",
      icon: <DocIcon />,
    },
    {
      text: "Client Facing",
      icon: <DocIcon />,
    },
    {
      text: "Products",
      icon: <DocIcon />,
    },
    {
      text: "Customers",
      icon: <DocIcon />,
    },
    {
      text: "Transactions",
      icon: <DocIcon />,
    },
    {
      text: "Geography",
      icon: <DocIcon />,
    },
    {
      text: "Sales",
      icon: <DocIcon />,
    },
    {
      text: "Overview",
      icon: <DocIcon />,
    },
    {
      text: "Daily",
      icon: <DocIcon />,
    },
    {
      text: "Monthly",
      icon: <DocIcon />,
    },
    {
      text: "Breakdown",
      icon: <DocIcon />,
    },
    {
      text: "Management",
      icon: <DocIcon />,
    },
    {
      text: "Admin",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
    {
      text: "Performance",
      icon: <DocIcon />,
    },
  ];
  const menuItems = [
    {
      text: lang.sidebar.deleteAll,
      icon: <TrashIcon />,
      handle: ({ text }) => console.log(text),
    },
    {
      text: mode === "dark" ? lang.sidebar.dark : lang.sidebar.light,
      icon: mode === "dark" ? <Sun /> : <Moon />,
      handle: () => dispatch(setMode()),
    },
    {
      text: lang.sidebar.myAccount,
      icon: <UserIcon />,
      handle: ({ text }) => console.log(text),
    },
    {
      text: lang.sidebar.logOut,
      icon: <Logout />,
      handle: ({ text }) => console.log(text),
    },
  ];
  return (
    <SidebarX>
      <div id="sidebar-top">
        <Link to="/" id="sidebar-home-btn">
          <PenLogo />
          {/* <HomeIcon /> */}
        </Link>
        <Link to="#" id="sidebar-new-btn">
          <PlusIcon />
          New Chat
        </Link>
      </div>

      <div id="sidebar-mid">
        {/* { map all essays/codex/.. } */}
        {testItems.map(({ text, icon }, index) => (
          <Link to="#" className="sb-item-a" key={index}>
            <div className="sb-item-container">
              {icon}
              <span>{text}</span>
            </div>
            {/* <div className="sb-mid-nowrap-fade"></div> */}
          </Link>
        ))}
      </div>

      <SideBarHr />

      <div id="sidebar-bottom">
        {menuItems.map(({ text, icon, handle }, index) => (
          <Link
            to="#"
            className="sb-item-a"
            key={index}
            onClick={() => {
              handle({ text });
            }}
          >
            <div className="sb-item-container">
              {icon}
              <span>{text}</span>
            </div>
          </Link>
        ))}
      </div>
    </SidebarX>
  );
};

const SideBarHr = styled.hr`
  margin: 0;
  padding: 0;
  border: none;
  border-top: 1px solid ${(props) => props.theme.background[300]};
`;

const SidebarX = styled.nav`
  height: 100vh;
  width: 250px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${(props) => props.theme.grey[900]};
  background-color: ${(props) => props.theme.background[50]};
  /*   For later:
              borderRadius: isNonMobile ? "9px" : "0",
              borderWidth: isNonMobile ? 0 : "3px",
              height: isNonMobile ? "calc(100vh - 1.5rem)" : "100vh",
              margin: isNonMobile ? "0.75rem 0 0.75rem 0.75rem" : "0",
  */

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${(props) => props.theme.grey[900]};
    background-color: ${(props) => props.theme.background[50]};
    border-radius: 0.3rem;
    &:hover {
      background-color: ${(props) => props.theme.background[100]};
      transition: all ease 0.3s;
    }
  }

  #sidebar-top {
    display: flex;
    align-items: center;
    padding-bottom: 0.25rem;

    a {
      padding: 0.4rem 0;
      /* padding: 0.75rem 0; */
      margin: 0.25rem 0;
      border: 1px solid ${(props) => props.theme.background[200]};
    }

    #sidebar-home-btn {
      width: calc(60px - 0.5rem);
      margin-right: 0.5rem;
    }
    #sidebar-new-btn {
      width: calc(100% - 50px);
      svg {
        margin-right: 0.5rem;
      }
    }
  }

  .sb-item-a {
    display: flex;
    justify-content: flex-start;
    margin: 0.25rem 0;
    padding: 0.9rem 0;
    position: relative;
  }

  .sb-item-container {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin: 0 0.5rem;
    }
    span {
      margin-left: 0.5rem;
      white-space: nowrap;
    }
  }

  #sidebar-mid {
    display: flex;
    flex-direction: column;
    overflow-y: hidden;

    &:hover {
      overflow-y: scroll;
      margin-right: -0.5rem;
    }
    .sb-item-a {
      padding: 1.5rem 0;
      overflow: hidden;
    }

    /*
    For later: make text fade at the end.
    .sb-mid-nowrap-fade {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 8px;
      z-index: 10;
      background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.75)
      );
      background-color: #1f2937;
    }
    .group:hover .from-[#2A2B32] {
      background-color: #2a2b32;
    } */
  }

  #sidebar-bottom {
    display: flex;
    flex-direction: column;
    padding-top: 0.25rem;
  }
`;

export default Sidebar;
