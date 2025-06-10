import { Link } from "react-router";
import {
  faAward,
  faChartPie,
  faClock,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
//  start imgs
import mainImg from "../assets/images/main.jpg";
import kidsProgram from "../assets/images/KidsProgram.jpeg";
import tajweedProgram from "../assets/images/TajweedProgram.jpg";
import IntensiveMemorization from "../assets/images/IntensiveMemorization.jpeg";
//  end imgs
// components
import Header from "../components/Header";
import ServicesCard from "../components/cards/ServicesCard";
import ProgramsCard from "../components/cards/ProgramsCard";
import CommentsCard from "../components/cards/CommentsCard";
import Footer from "../components/Footer";
import "../style/pages/home.css";
// slider library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// slider end
import Join from "../components/Join";
import { useLayoutEffect } from "react";
export default function Home() {
  useLayoutEffect(() => {
    document.title = "أكاديمية الماهرون";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const services = [
    [
      faUserGraduate,
      "معلمون متخصصون",
      "نخبة من المعلمين المجازين في القراءات والتجويد",
    ],
    [
      faClock,
      "مرونة في المواعيد",
      "جدول مرن يناسب جميع الفئات العمرية والمستويات",
    ],
    [faAward, "شهادات معتمدة", "شهادات إتمام معتمدة لجميع المستويات"],
    [faChartPie, "متابعة دورية", " ترسل التقارير الخاصة بالطالب لولي الأمر "],
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

  const programs = [
    [
      IntensiveMemorization,
      "برنامج الحفظ المكثف",
      "برنامج متكامل لحفظ القرآن الكريم خلال زمن قصير مع التركيز على التجويد والإتقان",
    ],
    [tajweedProgram, "التجويد", "تعلم أحكام التجويد وتطبيقها بشكل صحيح"],
    [
      kidsProgram,
      "برنامج البراعم الصغار",
      "برامج مخصصة للأطفال من سن 5 إلى 12 سنة ",
    ],
  ];
  const programsCards = programs.map((program, i) => {
    return (
      <ProgramsCard
        key={i}
        img={program[0]}
        title={program[1]}
        desc={program[2]}
      />
    );
  });
  const comments = [
    [
      "الطالبة سلمى",
      "بفضل ربنا اولا ثم الأكاديمية والمعلمة اسراء حفظت كم كويس في وقت قصير وراجعت على اللي كنت حفظاه الحمدلله",
    ],
    ["الطالبة شهد", "ممتاز الحمد لله"],
    ["الطالبة ملك", "كانت جميلة وملك ارتاحت مع المعلمة"],
    ["الطالبة هدير", "كويس جدا الحمد لله بارك الله فيكم"],
    ["الطالبة سارة", "الحمد لله جيدة جدا ♥"],
    ["الطالبة مايسة", "كان ممتاز جدا جزاكم الله خيرا"],
  ];
  const settings = {
    dots: true, // عرض النقاط أسفل الـ Slider
    infinite: true, // التمرير اللانهائي
    slidesToShow: 4, // عدد الشرائح المعروضة في الشاشات الكبيرة
    slidesToScroll: 1, // عدد الشرائح التي يتم تمريرها
    autoplay: true, // التمرير التلقائي
    speed: 1500, // سرعة التمرير
    autoplaySpeed: 3000, // سرعة التمرير التلقائي
    cssEase: "ease-in-out", // تأثير التمرير
    rtl: true, // دعم الاتجاه من اليمين لليسار
    
    responsive: [
      {
        breakpoint: 1024, // عند عرض الشاشة أقل من 1024px
        settings: {
          slidesToShow: 4, // عرض 3 شرائح
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // عند عرض الشاشة أقل من 768px
        settings: {
          slidesToShow: 3, // عرض شريحتين
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // عند عرض الشاشة أقل من 576px
        settings: {
          slidesToShow: 2, // عرض شريحة واحدة
          slidesToScroll: 1,
        },
      },
    ],
  };
  const commentsCards = comments.map((service, i) => {
    return <CommentsCard key={i} name={service[0]} comment={service[1]} />;
  });

  return (
    <>
      <Header />
      <section className="home-sec1">
        <div className="container">
          <div className="main-img-desc">
            <h1>تعلم القرآن بإتقان</h1>
            <p>
              انضم إلى أكاديمية الماهرون لتحفيظ القرآن الكريم وتعلم التجويد على
              يد نخبة من المعلمين المتخصصين
            </p>
            <div>
              <Link to="/programs" className="btn">
                ابدأ رحلتك
              </Link>
              <Link to="about" className="btn">
                تعرف علينا
              </Link>
            </div>
          </div>
          <div className="main-img">
            <img src={mainImg} className="hero-image" alt="Not Found" />
            <Link to="https://ar.pngtree.com/freebackground/a-close-up-of-the-holy-book-al-quran-on-a-green-prayer-rug-islamic-photo-concept_15480182.html?sol=downref&id=bef">
              المصدر
            </Link>
          </div>
        </div>
      </section>
      <section className="home-sec2">
        <div className="container">
          <div className="sec2-title">
            <h2>لماذا تختار أكاديمية الماهرون ؟</h2>
            <p>نقدم لكم تجربة تعليمية متميزة في حفظ و تجويد القرآن الكريم</p>
          </div>
          <div className="services">{serviceCards}</div>
        </div>
      </section>
      <section className="home-sec3">
        <div className="container">
          <h2>برامجنا التعليمية</h2>
          <div className="programs">{programsCards}</div>
        </div>
      </section>
      <section className="home-sec4">
        <div className="container">
          <h2>أراء الطلاب في الأكاديمية </h2>
          <div className="comments">
            <Slider { ...settings}>{commentsCards}</Slider>
          </div>
        </div>
      </section>
      <section className="home-sec5">
        <Join
          title={"ابدأ رحلتك مع القرآن الكريم اليوم"}
          desc={"سجل الأن واحصل على جلسة تجريبية مجانية مع معلمينا المتخصصين"}
        />
      </section>
      <Footer />
    </>
  );
}
