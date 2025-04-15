import {
  faArrowDownLong,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/pages/contact.css";
import { Link } from "react-router";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="contact-sec1">
        <div className="container">
          <h1>تواصل معنا</h1>
          <p>نسعد بتواصلكم وإستفساراتكم في أي وقت</p>
          <FontAwesomeIcon className="icon" icon={faArrowDownLong} />
        </div>
      </section>
      <section className="contact-sec2">
        <div className="container">
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">الاسم الكامل</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">رقم الجوال</label>
                <input type="number" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                أرسل الرسالة
              </button>
            </form>
          </div>
          <div className="contact-links">
            <div className="contact-info">
              <h4>تواصل معنا</h4>
              <ul>
                <li>
                  <Link to="https://wa.me/201062084964" target="_blank">
                    <p>
                      <FontAwesomeIcon icon={faPhone} />
                    </p>
                    <p>01062084964</p>
                  </Link>
                </li>
                <li>
                  <Link to="mailto:almahroun@gmail.com">
                    <p>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </p>
                    <p>almahroun@gmail.com</p>
                  </Link>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </p>
                  <p>الفيوم,مصر</p>
                </li>
              </ul>
            </div>
            <div className="contact-fast">
              <h4>تواصل معنا مباشرة</h4>
              <div className="contact-fast-links">
                <Link to="https://wa.me/201062084964" target="_blank">
                  <p>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    واتساب
                  </p>
                </Link>
                <Link to="https://t.me/Alshafeiy78" target="_blank">
                  <p>
                    <FontAwesomeIcon icon={faTelegram} />
                    تلجرام
                  </p>
                </Link>
              </div>
              <div className="follow-links">
                <h4>تابعونا على </h4>
                <div className="links">
                  <Link
                    to="https://www.facebook.com/share/1JkZPR9p89/"
                    target="_blank"
                  >
                    <p>
                      <FontAwesomeIcon icon={faFacebook} />
                    </p>
                  </Link>

                  <Link to="https://t.me/Al_maheron" target="_blank">
                    <p>
                      <FontAwesomeIcon icon={faTelegram} />
                    </p>
                  </Link>

                  <Link to="https://wa.me/201062084964" target="_blank">
                    <p>
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
