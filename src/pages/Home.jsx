import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/pages/home.css";
import mainImg from "../assets/images/main.jpg";
import { Link } from "react-router";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ServicesCard from "../components/ServicesCard";
export default function Home() {
  const services = [
    [
      faBook,
      "معلمون متخصصون",
      "نخبة من المعلمين المجازين في القراءات والتجويد",
    ],
    [faBook, "متابعة دورية", "ترسل التقارير الخاصة "],
    [faBook, "متابعة دورية", "ترسل التقارير الخاصة "],
    [faBook, "متابعة دورية", "ترسل التقارير الخاصة "],
  ];
  const serviceCards = services.map((service, i) => {
    return (
      <ServicesCard
        key={i}
        icon={service[0]}
        title={service[1]}
        desc={service[2]}
      />
    );
  });
  return (
    <>
      <Header />
      <section className="home-sec1">
        <div className="container">
          <div className="main-img-dec">
            <h1>تعلم القرآن بإتقان</h1>
            <p>
              انضم إلى أكاديمية الماهرون لتحفيظ القرآن الكريم وتعلم التجويد على
              يد نخبة من المعلمين المتخصصين
            </p>
            <div>
              <Link to="/programs">ابدأ رحلتك</Link>
              <Link to="about">تعرف علينا</Link>
            </div>
          </div>
          <div className="main-img">
            <img src={mainImg} alt="Not Found" />
            <Link to="https://ar.pngtree.com/freebackground/a-close-up-of-the-holy-book-al-quran-on-a-green-prayer-rug-islamic-photo-concept_15480182.html?sol=downref&id=bef">
              المصدر
            </Link>
          </div>
        </div>
      </section>
      <section className="home-sec2">
        <div className="container">
          <div className="sec2-title">
            <h2>لماذا تختار أكاديمية المهارون ؟</h2>
            <p>نقدم لكم تجربة تعليمية متميزة في حفظ و تجويد القرآن الكريم</p>
          </div>
          <div className="services">{serviceCards}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
