import { useSelector } from "react-redux";
import translations from "../../languages/translations.json";
import { MdEditNote, MdTranslate, MdCode } from "react-icons/md";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// Set current language for based on user's browser

const Home = () => {
  const { language } = useSelector((state) => state.global);
  const navigate = useNavigate();
  const lang = translations[language];
  const categories = [
    {
      text: lang.category.essays,
      link: "/essays",
      icon: <MdEditNote />,
      background: ".pink-gradient-bg",
    },
    {
      text: lang.category.grammarCorrection,
      link: "/grammar-correction",
      icon: <MdTranslate />,
      background: ".green-gradient-bg",
    },
    {
      text: lang.category.qa,
      link: "/qa",
      icon: <HiOutlineChatBubbleLeftRight />,
      background: ".orange-gradient-bg",
    },
    {
      text: lang.category.codex,
      link: "/codex",
      icon: <MdCode />,
      background: ".purple-gradient-bg",
    },
  ];
  return (
    <HomeX>
      <div className="grid-categories">
        {categories.map(({ text, icon, link, background }) => (
          <div className="grid-category" key={text}>
            <div
              onClick={() => {
                navigate(link);
              }}
              className={`${background}`}
            >
              {icon}
            </div>
            <h4>{text}</h4>
          </div>
        ))}
      </div>
    </HomeX>
  );
};

export default Home;

const HomeX = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .grid-categories {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr; /* Default value for all screen sizes */
  }

  .grid-category {
    div {
      border-radius: 1rem;
      padding: 4rem;
      background-color: red;
      font-size: 4rem;
    }
    h4 {
      color: ${(props) => props.theme.grey[900]};
      text-align: center;
    }
  }
  /* On screens larger than lg size, set grid columns to 4 */
  @media (min-width: 1024px) {
    .grid-categories {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* On screens larger than sm size, set grid columns to 3 */
  @media (min-width: 640px) {
    .grid-categories {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* On screens larger than xs size, set grid columns to 2 */
  @media screen and (min-width: 480px) {
    .grid-categories {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 480px) {
    /* .grid-category:nth-child(7n + 1) {
      grid-column: auto/span 2;
      grid-row: auto/span 2; */
    /* } */
  }
`;
