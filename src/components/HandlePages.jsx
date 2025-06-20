import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const titles = {
    "/": "أكاديمية الماهرون",
    "/programs": "البرامج",
    "/about": "من نحن",
    "/contact": "اتصل بنا",
    "/teachers": "المعلمون",
  };
  
  document.title = titles[location.pathname] || "أكاديمية الماهرون";
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
