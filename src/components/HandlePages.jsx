import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const titles = {
    "/": "أكاديمية الماهرون",
    "/programs": "البرامج",
    "/about": "عن الأكاديمية",
    "/contact": "التواصل",
    "/teachers": "المعلمون",
  };

  document.title = titles[location.pathname] || "أكاديمية الماهرون";
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
