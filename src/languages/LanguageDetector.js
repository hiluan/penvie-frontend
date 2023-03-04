import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../state";

const LanguageDetector = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const detectedLanguage = navigator.language.slice(0, 2);

    dispatch(setLanguage(detectedLanguage));
  }, [dispatch]);

  return null;
};

export default LanguageDetector;
