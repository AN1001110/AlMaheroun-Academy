import "../style/pages/teachers.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import {
  faHeadset,
  faUserTie,
  faScroll,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Teachers() {
  const skills = [
    [
      faUserTie,
      "معلمون متخصصون",
      "نخبة من المعلمين المجازين والحافظين لكتاب الله",
    ],
    [faHeadset, "دعم فني مستمر ", "التواصل لحل أي مشكلة أو الاستفسار"],
    [faScroll, "شهادات معتمدة", "شهادات و إجازات موثقة"],
    [
      faChartLine,
      "متابعة مستمرة",
      "تقييم  ومتابعة لمستوى الطالب وإعلام ولي الأمر بالتقدم",
    ],
  ];
  const skillsCards = skills.map((skill, i) => {
    return (
      <div className="skills-container card" key={i}>
        <div className="icon-bg">
          <FontAwesomeIcon className="icon" icon={skill[0]} />
        </div>
        <h3>{skill[1]}</h3>
        <p>{skill[2]}</p>
      </div>
    );
  });
  return (
    <>
      <Header />
      <section className="teachers-sec1">
        <div className="container">
          <h1>نخبة من المعلمين المؤهلين</h1>
          <p>
            نحن في أكاديمية الماهرون نؤمن بأن التعليم هو المفتاح لفتح أبواب
            الفرص والتقدم. لذلك، نحن نقدم لك مجموعة من المعلمين المتميزين الذين
            يمتلكون الخبرة والشغف لتعليمك.
          </p>
          <div className="links">
            <Link to={"/contact"}>ابدأ رحلتك التعليمية</Link>
            <Link to={"/programs"}>برامجنا</Link>
          </div>
        </div>
      </section>
      <section className="teachers-sec2">
        <div className="container"></div>
      </section>
      <section className="teachers-sec3">
        <div className="container">
          <h2>لماذا تختارنا</h2>
          <div className="skills">{skillsCards}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
