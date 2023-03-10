import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setPage } from "state";

export default function StatePageUpdater({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setPage(location.pathname));
  }, [dispatch, location]);

  return children;
}
