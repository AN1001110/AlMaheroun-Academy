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
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-titles"></div>
          <div className="footer-list">
            <p>الماهرون</p>
            <ul>
              <li>
                <span>نحو تعليم قرآني متميز</span>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <p>روابط سريعة</p>
            <ul>
              <li>
                <Link to="/">
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span>عن الأكاديمية</span>
                </Link>
              </li>
              <li>
                <Link to="/programs">
                  <span>البرامج</span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span>التواصل</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <p>تواصل معنا</p>
            <ul>
              <li>
                <Link to="https://wa.me/201117493384" target="_blank">
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span>01062084964</span>
                </Link>
              </li>
              <li>
                <Link to="mailto:almahroun@gmail.com">
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>almahroun@gmail.com</span>
                </Link>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span>الفيوم,مصر</span>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <p>تابعنا</p>
            <ul>
              <li>
                <Link
                  to="https://www.facebook.com/share/1JkZPR9p89/"
                  target="_blank"
                >
                  <span>
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="https://t.me/Al_maheron" target="_blank">
                  <span>
                    <FontAwesomeIcon icon={faTelegram} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/201117493384" target="_blank">
                  <span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-right">
          <span>
            <pre>
              جميع الحقوق محفوظة لأكاديمية الماهرون لتحفيظ القرآن الكريم{" "}
              {rightsDate}©
            </pre>
          </span>
        </div>
      </div>
    </footer>
  );
}
