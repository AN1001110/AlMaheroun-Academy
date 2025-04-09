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
import ijazasProgram from "../assets/images/IjazasProgram.jpg";
//  end imgs
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesCard from "../components/cards/ServicesCard";
import ProgramsCard from "../components/cards/ProgramsCard";
import CommentsCard from "../components/cards/CommentsCard";
import "../style/pages/home.css";
export default function Home() {
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
      kidsProgram,
      "تحفيظ القرآن للأطفال",
      "برامج مخصصة للأطفال من سن 5 إلى 12 سنة ",
      "/programs",
    ],
    [
      tajweedProgram,
      "التجويد",
      "تعلم أحكام التجويد وتطبيقها بشكل صحيح",
      "/programs",
    ],
    [
      ijazasProgram,
      "الإجازات الختلفة",
      " برنامج متقدم للحصول على الإجازات في القراءات العشر وغيرها",
      "/programs",
    ],
  ];
  const programsCards = programs.map((program, i) => {
    return (
      <ProgramsCard
        key={i}
        img={program[0]}
        title={program[1]}
        desc={program[2]}
        link={program[3]}
      />
    );
  });
  const comments = [
    [
      "الطالبة سلمى",
      "بفضل ربنا اولا ثم الأكاديمية والمعلمة اسراء حفظت كم كويس في وقت قصير ورجعت على الكنت حفظاه الحمدلله",
    ],
    [
      "الطالبة سلمى",
      "ربنا يجازيكم عنا كل خير انا دخلت بنات عمتي هما بسم الله ما شاء الله خاتمين القرآن وبيراجعوا مع حضرتكم",
    ],
    ["الطالبة شهد", "ممتاز الحمد لله"],
    ["ولي أمر الطالبة ملك", "كانت جميلة وملك ارتاحت مع المعلمة"],
    ["الطالبة هدير", "كويس جدا الحمد لله بارك الله فيكم"],
    ["الطالبة سارة", "الحمد لله جيدة جدا ♥"],
    ["الطالبة مايسة", "كان ممتاز جدا جزاكم الله خيرا"],
  ];
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
          <div className="comments">{commentsCards}</div>
        </div>
      </section>
      <section className="home-sec5">
        <div className="container">
          <h2>ابدأ رحلتك مع القرآن الكريم اليوم</h2>
          <p>سجل الأن واحصل على جلسة تجريبية مجانية مع معلمينا المتخصصين</p>
          <div className="sec5-btns">
            <Link to="/programs">سجل الأن</Link>
            <Link to="/contact">تواصل معنا</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
