import { useSelector } from "react-redux";
import translations from "../../languages/translations.json";
import { MdEditNote, MdTranslate, MdCode } from "react-icons/md";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import styled from "styled-components";
// Set current language for based on user's browser

const Home = () => {
  const { language } = useSelector((state) => state.global);
  const lang = translations[language];
  const categories = [
    {
      text: lang.category.essays,
      icon: <MdEditNote />,
    },
    {
      text: lang.category.grammarCorrection,
      icon: <MdTranslate />,
    },
    {
      text: lang.category.qa,
      icon: <HiOutlineChatBubbleLeftRight />,
    },
    {
      text: lang.category.codex,
      icon: <MdCode />,
    },
  ];
  return (
    <PageHome>
      {categories.map(({ text, icon }) => (
        <div>
          <CatIcon>{icon}</CatIcon>
          <h4>{text}</h4>
        </div>
      ))}
    </PageHome>
  );
};

export default Home;

const PageHome = styled.section``;
const CatIcon = styled.div``;
