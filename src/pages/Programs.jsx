import {
  faArrowDownLong,
  faBookQuran,
  faUserTie,
  faChildren,
  faClock,
  faCertificate,
  faComments,
  faGraduationCap,
  faUsers,
  faBookReader,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/pages/programs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainProgramsCard from "../components/cards/MainProgramsCard";
import {  useLayoutEffect } from "react";

export default function Programs() {
  useLayoutEffect(() => {
    document.title = "Programs";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const programs = [
    [
      faBookQuran,
      "برنامج الحفظ المكثّف",
      "برنامج متكامل لحفظ القرآن الكريم خلال زمن قصير مع التركيز على التجويد والإتقان",
      [
        " متابعة فورية مستمرة",
        " مخصّص بواجبات مكثّفة",
        " شهادة معتمدة",
        "الحصة التجريبية الأولى مجانية",
      ],
    ],
    [
      faGraduationCap,
      "برنامج التجويد",
      "تعلّم أحكام التجويد وتحسين النطق مع أفضل المتخصّصين",
      [
        "دروس نظرية وتطبيقية",
        "تدريبات مسموعة",
        " إجادة في التجويد",
        "الحصة التجريبية الأولى مجانية",
      ],
    ],
    [
      faChildren,
      "برنامج البراعم الصغار",
      "برنامج مخصّص للأطفال من سن 5–12 سنة لتعليم القرآن بأسلوب تفاعلي ممتع",
      [
        "جلسات تفاعلية",
        " مكافآت تشجيعية",
        "متابعة مع الأهل",
        "الحصة التجريبية الأولى مجانية",
      ],
    ],
    [
      faUsers,
      " برنامج الأسرة القرآنية",
      "برنامج يربط الأسرة بالقرآن الكريم",
      [
        "جلسات قرآنية تفاعلية لجميع أفراد الأسرة",
        "أنشطة تربوية لتعزيز الروابط الأسرية",
        "موارد صوتية ومرئية مناسبة لكافة الأعمار",
        "الحصة التجريبية الأولى مجانية",
      ],
    ],
    [
      faBookReader,
      " برنامج القراءة والكتابة",
      "أساس متين وممتع لمهارات القراءة والكتابة",
      [
        " دروس مبسطة في القراءة والإملاء",
        " تمارين تفاعلية لتنمية مهارة الفهم والكتابة",
        "متابعة فردية وتقييم دوري للتقدم",
        "الحصة التجريبية الأولى مجانية",
      ],
    ],
  ];

  const programsCards = programs.map((program, i) => {
    return (
      <MainProgramsCard
        key={i}
        icon={program[0]}
        title={program[1]}
        desc={program[2]}
        advantagesList={program[3]}
        link={``}
      />
    );
  });
  const skills = [
    [faUserTie, "معلمون متخصصون", "نخبة من المعلمين المجازين"],
    [faClock, "مواعيد مرنة", "أوقات تناسب جميع الفئات"],
    [faCertificate, "شهادات معتمدة", "شهادات و إجازات موثقة"],
    [faComments, "دعم مستمر", "متابعة وتواصل دائم"],
  ];
  const skillsCards = skills.map((skill, i) => {
    return (
      <div className="skills-container card" key={i}>
        <FontAwesomeIcon className="icon" icon={skill[0]} />
        <h3>{skill[1]}</h3>
        <p>{skill[2]}</p>
      </div>
    );
  });
  return (
    <>
      <Header />
      <section className="programs-sec1">
        <div className="container">
          <h1>مميزات الدراسة معنا</h1>
          <p>نسعد بتواصلكم وإستفساراتكم في أي وقت</p>
          <FontAwesomeIcon className="icon arrow" icon={faArrowDownLong} />
        </div>
      </section>
      <section className="programs-sec3">
        <div className="container"></div>
      </section>
      <section className="programs-sec2">
        <div className="container">
          <h2>برامجنا التعليمية</h2>
          <div className="programs">{programsCards}</div>
        </div>
      </section>
      <section className="programs-sec3">
        <div className="container">
          <h2>مميزات الدراسة معنا</h2>
          <div className="skills">{skillsCards}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
