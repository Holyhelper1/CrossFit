import people1 from "../../assets/images/Family/1.jpg";
import people2 from "../../assets/images/Family/2.jpg";
import people3 from "../../assets/images/Family/3.jpg";
import people4 from "../../assets/images/Family/4.jpg";
import people5 from "../../assets/images/Family/5.jpg";
export const Family = () => {

    //заменить на настоящую карту в чёрном стиле
    return (
        <div className="family">
            <header className="family-header container">
                <h2 className="family-title backdrop-title centered title-medium" data-title="Part">be a part of our fit family</h2>
                <div className="family-description section-description">
                    <p>Training helps you think and feel better. join us!</p>
                </div>
            </header>
           <div className="family-body container-wide">
            <img className="family-image" src={people1} alt="Training people" width={414} height={479}  />
            <img className="family-image" src={people2} alt="Training people" width={744} height={479}  />
            <img className="family-image" src={people3} alt="Training people" width={396} height={479}  />
            <img className="family-image" src={people4} alt="Training people" width={396} height={479}  />
            <img className="family-image" src={people5} alt="Training people" width={414} height={479}  />
            
           </div>
        </div>
    );
};