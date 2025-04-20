import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/pages/about.css";
import aboutImg from "../assets/images/aboutImg.jpg";
import {
  faChalkboardTeacher,
  faHandshake,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import ServicesCard from "../components/cards/ServicesCard";
import Join from "../components/Join";
import { useLayoutEffect } from "react";
export default function About() {
  useLayoutEffect(() => {
    document.title = "About";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  // services
  const services = [
    [
      faHandshake,
      "الصدق والأمانة",
      "نلتزم بأعلى معايير الأمانة والصدق في معاملاتنا مع طلابنا وأولياء الأمور",
    ],
    [
      faChalkboardTeacher,
      "التميز في التعليم",
      "نسعى دائماً لتقديم أفضل المناهج التعليمية وأحدث طرق التدريس",
    ],
    [
      faHeart,
      "الاهتمام بالطالب",
      "نولي اهتماماً خاصاً لكل طالب ونراعي الفروق الفردية في التعليم",
    ],
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
      <section className="about-sec1">
        <div className="container">
          <div className="about-desc">
            <h1>من نحن؟</h1>
            <p>
              أكاديمية الماهرون هي منصتكم الإلكترونية المتخصصة في تحفيظ القرآن
              وتعليمه باحترافية منذ تأسيسها عام ٢٠٢٢. نهدف إلى إتاحة تعلم القرآن
              وحفظه للجميع بغض النظر عن العمر أو الموقع من خلال بيئة تعليمية
              مرنة وآمنة تُواكب التطور الرقمي. نوفر برامج متكاملة تناسب كافة
              الفئات العمرية وتراعي الفروق الفردية، تشمل حفظ القرآن بطرق تفاعلية
              ودروس تجويد دقيقة، مع متابعة فردية من معلمين متخصصين. كما نستخدم
              تقنيات حديثة وفصولاً افتراضية مرنة تتيح للطلاب اختيار مواعيد
              تناسبهم. رؤيتنا أن نكون روّاد التعليم القرآني عبر الإنترنت وإعداد
              جيل واعٍ يحمل رسالة القرآن بفهم وإتقان.!
            </p>
          </div>
          <div className="main-img">
            <img src={aboutImg} className="hero-image" alt="Not Found" />
          </div>
        </div>
      </section>

      <section className="about-sec2">
        <div className="container">
          <h2>قيمنا الأساسية</h2>
          <div className="services">{serviceCards}</div>
        </div>
      </section>
      <section className="about-sec3">
        <Join
          title={"انضم إلى عائلة الماهرون"}
          desc={
            "ابدأ رحلتلك في حفظ القرآن الكريم وتعلم علومه مع نخبة من المعلمين المتميزين"
          }
        />
      </section>
      <Footer />
    </>
  );
}
