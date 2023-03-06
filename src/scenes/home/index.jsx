import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CodeIcon, EssayIcon, LangIcon, QuestionIcon } from "assets/icons";
import translations from "../../languages/translations.json";
import styled from "styled-components";
import { createRef, useEffect, useRef } from "react";
// Set current language for based on user's browser

const Home = () => {
  const { mode, language } = useSelector((state) => state.global);
  const navigate = useNavigate();
  const lang = translations[language].category;
  const categories = [
    {
      title: lang.essays.title,
      subtitle: lang.essays.subtitle,
      link: "/essays",
      icon: <EssayIcon />,
      background: "pink-gradient-bg",
    },
    {
      title: lang.grammarCorrection.title,
      subtitle: lang.grammarCorrection.subtitle,
      link: "/grammar-correction",
      icon: <LangIcon />,
      background: "green-gradient-bg",
    },
    {
      title: lang.qa.title,
      subtitle: lang.qa.subtitle,
      link: "/qa",
      icon: <QuestionIcon />,
      background: "orange-gradient-bg",
    },
    {
      title: lang.codex.title,
      subtitle: lang.codex.subtitle,
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
    <HomeX
      className={
        mode === "dark" ? "darkmode-gradient-bg" : "lightmode-gradient-bg"
      }
    >
      <div className="grid-categories">
        {categories.map(
          ({ title, subtitle, icon, link, background }, index) => (
            <div key={index}>
              <Link
                to={link}
                ref={growRefs.current[index]}
                className="grid-category-icon"
              >
                <div className={`${background}`}>{icon}</div>
              </Link>
              <div className={`${background} grid-category-sub`}>
                <h5>{title}</h5>
                <p>{subtitle}</p>
              </div>
            </div>
          )
        )}
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
    background-color: ${(props) => props.theme.background[0]};
    padding: 1rem;
    border-radius: 1rem;
    transition: box-shadow 0.3s ease;
    box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: none;
    }
  }

  .grid-category-icon {
    div {
      padding: 2rem;
      font-size: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      color: white;
      /* color: ${(props) => props.theme.grey[900]}; */
      transition: transform ease 0.3s, filter ease 0.3s;
      &:hover {
        filter: brightness(1.1);
      }
      svg {
        transition: transform ease 0.3s;
      }
      &:hover svg {
        transform: scale(1.15);
      }
    }
  }

  .grid-category-sub {
    position: absolute;
    padding: 1rem;
    border-radius: 0.5rem;
    bottom: 10vh;
    visibility: hidden;
    background-color: ${(props) => props.theme.grey[900]};
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    transform: translateX(-50%) scale(0.3);
    left: 50%;
    opacity: 0;

    h5 {
      position: absolute;
      top: -1.5rem;
      left: 0;
      width: 100%;
      text-align: center;
    }
  }

  .grid-category-icon:hover + .grid-category-sub {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1);
    filter: grayscale(68%) brightness(1.6);
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
