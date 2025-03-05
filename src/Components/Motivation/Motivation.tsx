import PullUps from "../../assets/images/Motivation/pull-ups.jpg";
import Dumbbell from "../../assets/images/Motivation/lifts-dumbbell.jpg";
import { ViewMoreButton } from "../View-more-button/View-more-button";
export const Motivation = () => {
  return (
    <div className="motivation">
      <h2 className="visually-hidden">Motivation</h2>
      <ul className="motivation-list">
        <li className="motivation-item">
          <div className="motivation-card container">
            <div className="motivation-card-body">
              <h3
                className="motivation-card-title backdrop-title title-medium"
                data-title="Strong"
              >
                Be you, just stronger!<br></br> Power is in you
              </h3>
              <div className="motivation-card-description">
                <p>
                  Unum solum justo ex ius. Pro cu probo laboramus eius insolens
                  euripidis te eos, ut agam tota.
                </p>{" "}
              </div>

              <ViewMoreButton link={"#"} children={"View more"} />
            </div>
            <img
              src={PullUps}
              alt="a man pulling himself up on a horizontal bar"
              className="motivation-card-image"
              width={518}
              height={768}
              loading="lazy"
            />
          </div>
        </li>
        <li className="motivation-item">
          <div className="motivation-card container">
            <div className="motivation-card-body">
              <h3
                className="motivation-card-title backdrop-title title-medium "
                data-title="Start"
              >
                Today is the best
                <br></br> day to start!
              </h3>
              <div className="motivation-card-description">
                <p>
                  Sed abhorreant constituam consectetuer eu. At mei clita
                  deserunt, his movet molestie nemore.
                </p>{" "}
              </div>
              <ViewMoreButton link={"#"} children={"View more"} />
            </div>
            <img
              src={Dumbbell}
              alt="a man pulling himself up on a horizontal bar"
              className="motivation-card-image"
              width={518}
              height={768}
              loading="lazy"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};
