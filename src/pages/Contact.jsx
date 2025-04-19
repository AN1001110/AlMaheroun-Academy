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
import { Link, useNavigate } from "react-router";
import { useLayoutEffect, useState } from "react";
export default function Contact() {
  useLayoutEffect(() => {
    document.title = "Contact";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const nav = useNavigate();
  function handelForm(e) {
    try {
      setForm({ ...form, [e.target.name]: e.target.value });
    } catch (err) {
      console.log(err);
    }
  }
  function sentMessage() {
    setSubmitted(true);

    if (
      form.name.length >= 2 &&
      form.phone.length === 11 &&
      form.message.length > 0
    ) {
      try {
        console.log(
          form.name.length >= 2 &&
            form.phone.length === 11 &&
            form.message.length > 0
        );
        const phoneNumber = "201062084964";
        const encodeMessage = encodeURIComponent(
          `الاسم : ${form.name} , \n رقم التواصل : ${form.phone} ,\n ${
            form.email.length > 1
              ? `البريد الإلكتروني : ${form.email} , \n `
              : ""
          } الرسالة : ${form.message} `
        );
        const whatsAppURL = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;
        window.open(whatsAppURL, "_blank");
        nav("/", { replace: true });
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
      <Header />
      <section className="contact-sec1">
        <h1>تواصل معنا</h1>
        <p>نسعد بتواصلكم وإستفساراتكم في أي وقت</p>
        <FontAwesomeIcon className="icon arrow" icon={faArrowDownLong} />
      </section>
      <section className="contact-sec2">
        <div className="container">
          {/* form start */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">الاسم الكامل</label>
              <input
                value={form.name}
                onChange={handelForm}
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
              />
            </div>
            {form.name < 2 && submitted && (
              <p className="err"> ادخل اسم صالح يتكون من حرفين أو أكثر</p>
            )}
            <div className="form-group">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input
                value={form.email}
                onChange={handelForm}
                type="email"
                id="email"
                name="email"
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">رقم الجوال</label>
              <input
                value={form.phone}
                onChange={handelForm}
                type="number"
                id="phone"
                name="phone"
                required
                autoComplete="tel"
              />
              {form.phone.length !== 11 && submitted && (
                <p className="err"> ادخل رقم صالح يتكون من 11 رقم</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">الرسالة</label>
              <textarea
                value={form.message}
                onChange={handelForm}
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
              {form.message < 1 && submitted && (
                <p className="err">ادخل رسالة صالح تتكون من حرف أو أكثر</p>
              )}
            </div>
            <button
              onClick={sentMessage}
              type="submit"
              className="submit-button"
            >
              أرسل الرسالة
            </button>
          </form>

          {/* form end */}
          <div className="contact-links">
            <div className="contact-info">
              <h4>تواصل معنا</h4>
              <div className="links">
                <Link
                  className="link"
                  to="https://wa.me/201062084964"
                  target="_blank"
                >
                  <p>
                    <FontAwesomeIcon icon={faPhone} />
                  </p>
                  <p>01062084964</p>
                </Link>

                <Link className="link" to="mailto:almahroun@gmail.com">
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </p>
                  <p>almahroun@gmail.com</p>
                </Link>
                <div className="link">
                  <p>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </p>
                  <p>الفيوم,مصر</p>
                </div>
              </div>
            </div>
            <div className="contact-fast">
              <h4>تواصل معنا مباشرة</h4>
              <div className="contact-fast-links">
                <Link
                  className="btn"
                  to="https://wa.me/201062084964"
                  target="_blank"
                >
                  <p>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    واتساب
                  </p>
                </Link>
                <Link
                  className="btn"
                  to="https://t.me/Alshafeiy78"
                  target="_blank"
                >
                  <p>
                    <FontAwesomeIcon icon={faTelegram} />
                    تلجرام
                  </p>
                </Link>
              </div>
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
      </section>
      <Footer />
    </>
  );
}
