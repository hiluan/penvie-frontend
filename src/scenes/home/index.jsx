import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CodeIcon, EssayIcon, LangIcon, QuestionIcon } from "assets/icons";
import translations from "../../languages/translations.json";
import styled from "styled-components";
import { createRef, useEffect, useRef } from "react";
// Set current language for based on user's browser

const Home = () => {
  const { language } = useSelector((state) => state.global);
  const navigate = useNavigate();
  const lang = translations[language];
  const categories = [
    {
      text: lang.category.essays,
      link: "/essays",
      icon: <EssayIcon />,
      background: "pink-gradient-bg",
    },
    {
      text: lang.category.grammarCorrection,
      link: "/grammar-correction",
      icon: <LangIcon />,
      background: "green-gradient-bg",
    },
    {
      text: lang.category.qa,
      link: "/qa",
      icon: <QuestionIcon />,
      background: "orange-gradient-bg",
    },
    {
      text: lang.category.codex,
      link: "/codex",
      icon: <CodeIcon />,
      background: "purple-gradient-bg",
    },
  ];

  // create GROW animation, must use this to have the effect in all map items
  const growRefs = useRef(categories.map(() => createRef()));
  useEffect(() => {
    growRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.classList.add("animate-grow");
      }
    });
  }, []);

  return (
    <HomeX>
      <div className="grid-categories">
        {categories.map(({ text, icon, link, background }, index) => (
          <Link
            to={link}
            ref={growRefs.current[index]}
            className="grid-category"
            key={text}
          >
            <div className={`${background}`}>{icon}</div>
            {/* <h4>{text}</h4> */}
          </Link>
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
  height: 100vh;

  .grid-categories {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr; /* Default value for all screen sizes */
  }

  .grid-category {
    div {
      padding: 2rem;
      font-size: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      color: ${(props) => props.theme.grey[900]};
      cursor: pointer;
      transition: all ease 0.3s;
      &:hover {
        filter: brightness(1.1);
        svg {
          transition: all ease 0.3s;
          transform: scale(1.15);
        }
      }
    }
    h4 {
      color: ${(props) => props.theme.grey[900]};
      text-align: center;
    }
  }

  .animate-grow {
    animation: grow 0.3s ease-out;
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
