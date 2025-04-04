import { Link } from "react-router";
import "../style/components/header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [screenOrientation, setScreenOrientation] = useState(
    window.screen.orientation.type
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
      setScreenOrientation(window.screen.orientation.type);
    });
  }, [screenSize, screenOrientation]);
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          الماهرون
        </Link>
        <div>
          <div
            className="bar"
            onClick={() => {
              setShow((ele) => !ele);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul
            style={{
              display:
                screenOrientation === "portrait-primary"
                  ? screenSize < 768
                    ? show
                      ? "flex"
                      : "none"
                    : "flex"
                  : screenSize < 993
                  ? show
                    ? "flex"
                    : "none"
                  : "flex",
            }}
          >
            <li>
              <Link to="/">
                <span>الصفحة الرئيسية</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>عن الأكاديمية</span>
              </Link>
            </li>
            <li>
              <Link to="/programs">
                <span>البرامج</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>التواصل</span>
              </Link>
            </li>
            <li>
              <Link to="/programs">
                <span className="btn">ابدأ الأن</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
