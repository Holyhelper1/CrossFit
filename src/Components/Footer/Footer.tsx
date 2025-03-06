import Logo from "../../assets/images/kropp-footer-logo.png";
import tiktok from "../../assets/Icons/footer_icons/tikTok.svg";
import youtube from "../../assets/Icons/footer_icons/YouTube.svg";
import instagram from "../../assets/Icons/footer_icons/instagram.svg";
import facebook from "../../assets/Icons/footer_icons/Facebook.svg";
import twitter from "../../assets/Icons/footer_icons/Twitter.svg";
export const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-main">
        <div className="footer-main-inner container">
          <header className="footer-header">
            <a href="/" className="footer-logo">
              <img
                className="footer-logo-image"
                src={Logo}
                width={270}
                height="auto"
                loading="lazy"
                alt="Kropp logo"
              />
            </a>
            <p className="footer-description">
              please feel free to send us an e-mail at{" "}
              <a href="mailto:kropp@qodeinteractive.com">
                kropp@qodeinteractive.com
              </a>{" "}
              For any additional inquiries
            </p>
          </header>
          <div className="footer-body">
            <div className="footer-column">
              <h2 className="footer-column-title">About</h2>
              <p className="footer-about">
                Shape up your site with Kropp, a theme especially made for
                fitness & gym websites.
              </p>
            </div>
            <div className="footer-column">
              <h2 className="footer-column-title">Working hours</h2>
              <div className="footer-schedule">
                Monday - Friday
                <br />
                <time dateTime="05:30/24:00">05:30 - 24:00</time>
              </div>
              <div className="footer-schedule">
                Weekdays
                <br />
                <time dateTime="00:00/24:00">00:00 - 24:00</time>
              </div>
            </div>
            <div className="footer-column">
              <h2 className="footer-column-title">Location</h2>
              <address className="footer-address">
                68 Jay Street, Brooklyn,
                <br />
                NY 11201, United States
              </address>
              <div className="footer-contacts">
                <ul className="footer-contacts-list">
                  <li className="footer-contacts-item">
                    <a
                      className="footer-contacts-link"
                      href="mailto:kropp@qodeinteractive.com"
                    >
                      kropp@qodeinteractive.com
                    </a>
                  </li>
                  <li className="footer-contacts-item">
                    <a className="footer-contacts-link" href="tel:+17184076400">
                      + (1) 718 - 407 - 6400
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column">
              <h2 className="footer-column-title has-arrow">start now</h2>
              <form className="footer-subscribe">
                <label className="visually-hidden" htmlFor="subscribe-email">
                  Email
                </label>
                <input
                  className="footer-subscribe-input input"
                  id="subscribe-email"
                  type="email"
                  placeholder="Email"
                />
                <button
                  className="footer-subscribe-button"
                  type="submit"
                  title="Subscribe"
                >
                  <span className="visually-hidden">Subscribe</span>
                </button>
              </form>
              <div className="footer-soc1als">
                <a href="https://www.tiktok.com/">
                  <img src={tiktok} alt="tiktok" width={20} height={21} />{" "}
                </a>
                <a href="https://www.youtube.com/">
                  <img src={youtube} alt="youtube" width={25} height={21} />{" "}
                </a>
                <a href="https://www.instagram.com/">
                  <img src={instagram} alt="instagram" width={20} height={21} />
                </a>
                <a href="https://www.facebook.com/">
                  <img src={facebook} alt="facebook" width={20} height={21} />{" "}
                </a>
                <a href="https://x.com/">
                  <img src={twitter} alt="twitter" width={22} height={21} />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-extra">
        <div className="footer-extra-inner container">
          <div className="footer-copyright">
            © <time dateTime="2022">2022</time> Qode Interactive, All Rights
            Reserved |<a href="/">Privacy Policy </a> |{" "}
            <a href="/">Contact Us</a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};
