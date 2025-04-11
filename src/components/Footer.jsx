import { Link } from "react-router";
import "../style/components/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const rightsDate = new Date().getFullYear();
  console.log(rightsDate);

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-titles"></div>
          <div className="footer-list">
            <h5>الماهرون</h5>
            <ul>
              <li>
                <p>نحو تعليم قرآني متميز</p>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h5>روابط سريعة</h5>
            <ul>
              <li>
                <Link to="/">
                  <p>الرئيسية</p>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <p>عن الأكاديمية</p>
                </Link>
              </li>
              <li>
                <Link to="/programs">
                  <p>البرامج</p>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <p>التواصل</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h5>تواصل معنا</h5>
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
                <Link  to = "mailto:almahroun@gmail.com">
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
          <div className="footer-list">
            <h5>تابعنا</h5>
            <ul>
              <li>
                <Link to="https://www.facebook.com/share/1JkZPR9p89/" target="_blank">
                  <p>
                    <FontAwesomeIcon icon={faFacebook} />
                  </p>
                </Link>
              </li>
              <li>
                <Link to="https://t.me/Al_maheron" target="_blank">
                  <p>
                    <FontAwesomeIcon icon={faTelegram} />
                  </p>
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/201062084964" target="_blank">
                  <p>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-right">
          <pre>
            جميع الحقوق محفوظة لأكاديمية الماهرون لتحفيظ القرآن الكريم{" "}
            {rightsDate}©
          </pre>
        </div>
      </div>
    </footer>
  );
}
