import { useDispatch, useSelector } from "react-redux";
import {
  Sun,
  Moon,
  Logout,
  DocIcon,
  PenIcon,
  PlusIcon,
  TrashIcon,
  UserIcon,
} from "assets/icons";
import { setMode, setSignedIn } from "state";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useGetChatGptQuery } from "state/apiChat";
import translations from "../languages/translations.json";
import styled from "styled-components";
import Userfront from "@userfront/react";

Userfront.init(process.env.REACT_APP_USERFRONT_ACCOUNT_ID);

const SidebarTop = ({ lang }) => {
  return (
    <div id="sidebar-top">
      {/* save this for more services LATER
      <Link to="/" id="sidebar-home-btn">
        <PenLogo />
      </Link> */}
      <Link to="#" id="sidebar-new-btn">
        <PlusIcon />
        {lang.sidebar.newChat}
      </Link>
    </div>
  );
};

const SidebarMid = ({ lang }) => {
  // use pathname to get current page => get backend's data
  const { pathname } = useLocation();
  const { data } = useGetChatGptQuery();
  console.log("🚀 ~ data:", data);

  const testItems = new Array(20).fill({ text: "This is the Chat number" });
  const [list, setList] = useState(testItems);
  const memoizedList = useMemo(() => [...list], [testItems]);

  const handleShowMore = () => {
    setList([...list, ...testItems]);
  };

  return (
    <div id="sidebar-mid">
      {/* { map all essays/codex/.. } */}
      {memoizedList.map(({ text, _id }, index) => (
        <Link to={`${pathname}/${index}`} className="sb-item-a" key={index}>
          <div id="sb-fade-block"></div>
          <div className="sb-item-container">
            <DocIcon />
            <span>
              {text} {index}
            </span>
            <div>
              <PenIcon />
              <TrashIcon />
            </div>
          </div>
        </Link>
      ))}
      <Link to="#" id="sb-show-more" onClick={handleShowMore}>
        {lang.sidebar.showMore}
      </Link>
    </div>
  );
};

const SidebarBottom = ({ mode, lang }) => {
  const dispatch = useDispatch();

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
      handle: () => console.log(Userfront.accessToken()),
    },
    {
      text: lang.sidebar.logOut,
      icon: <Logout />,
      handle: () => {
        dispatch(setSignedIn(false));
        Userfront.logout();
      },
    },
  ];
  return (
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
  );
};

const Sidebar = () => {
  const { mode, language } = useSelector((state) => state.global);
  const lang = translations[language];

  return (
    <SidebarX>
      <SidebarTop lang={lang} />
      <SidebarMid lang={lang} />
      <SideBarHr />
      <SidebarBottom mode={mode} lang={lang} />
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
  opacity: 0.8;
  height: calc(100vh - 1rem);
  width: 250px;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.grey[900]};
  background-color: ${(props) => props.theme.background[200]};
  /*   For later:
              borderRadius: isNonMobile ? "9px" : "0",
              borderWidth: isNonMobile ? 0 : "3px",
              height: isNonMobile ? "calc(100vh - 1.5rem)" : "100vh",
              margin: isNonMobile ? "0.75rem 0 0.75rem 0.75rem" : "0",
  */
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  /* z-index: 5; */
  /* backdrop-filter: blur(30px); */

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${(props) => props.theme.grey[900]};
    background-color: ${(props) => props.theme.background[200]};
    border-radius: 0.3rem;
    &:hover {
      background-color: ${(props) => props.theme.background[300]};
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
      border: 1px solid ${(props) => props.theme.background[300]};
    }

    #sidebar-home-btn {
      width: calc(60px - 0.5rem);
      margin-right: 0.5rem;
    }
    #sidebar-new-btn {
      /* width: calc(100% - 50px); save this for more services*/
      width: calc(100%);

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
      color: ${(props) => props.theme.grey[500]};
    }

    > svg {
      margin: 0 0.5rem;
    }
    span {
      margin-left: 0.5rem;
      white-space: nowrap;
    }
    > div {
      position: absolute;
      right: 0;
      display: flex;
    }
    > div > svg {
      margin: 0 0.25rem;
    }
  }

  #sidebar-mid {
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    padding-bottom: 1rem;

    &:hover {
      overflow-y: scroll;
      margin-right: -5px;
    }
    .sb-item-a {
      padding: 1.5rem 0;
      overflow: hidden;
    }

    #sb-show-more {
      margin-top: 0.5rem;
      /* margin-bottom: 3rem; */
      padding: 0.25rem 1rem;
      border: 1px solid ${(props) => props.theme.background[400]};
      background-color: ${(props) => props.theme.background[200]};
      margin: 0 auto;
      &:hover {
        background-color: ${(props) => props.theme.background[100]};
      }
    }

    #sb-fade-block {
      position: absolute;
      top: 0;
      right: 0;
      width: 20%;
      height: 100%;
      background: linear-gradient(
        to left,
        ${(props) => props.theme.background[200]},
        transparent
      );
    }
  }

  #sidebar-bottom {
    display: flex;
    flex-direction: column;
    padding-top: 0.25rem;
  }
`;

export default Sidebar;
