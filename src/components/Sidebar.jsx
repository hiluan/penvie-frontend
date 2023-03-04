import { useSelector } from "react-redux";
import { MdEditNote } from "react-icons/md";
import translations from "../languages/translations.json";
import styled from "styled-components";

const Sidebar = () => {
  const { mode, language } = useSelector((state) => state.global);
  const lang = translations[language];

  const items = [
    {
      text: lang.sidebar.deleteAll,
      icon: <MdEditNote />,
    },
    {
      text: mode === "dark" ? lang.sidebar.dark : lang.sidebar.light,
      icon: <MdEditNote />,
    },
    {
      text: lang.sidebar.myAccount,
      icon: <MdEditNote />,
    },
    {
      text: lang.sidebar.logOut,
      icon: <MdEditNote />,
    },
    {
      text: lang.sidebar.codex,
      icon: <MdEditNote />,
    },
  ];
  return (
    <SidebarX>
      <div>
        <button></button>
        <button></button>
      </div>
      <div>{/* { map all essays/codex/.. } */}</div>
      <div>
        {items.map(({ text, icon }) => (
          <div></div>
        ))}
      </div>
    </SidebarX>
  );
};

const SidebarX = styled.section``;

export default Sidebar;
