import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/pages/home.css";
import mainImg from "../assets/images/main.jpg";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <Header />
      <section className="home-sec1">
        <div className="container">
          <div className="main-img-dec">
            <h1>
             
                تعلم القرآن <span>بإتقان </span>
            
            </h1>
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
      <Footer />
    </>
  );
}
