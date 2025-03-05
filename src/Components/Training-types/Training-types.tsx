import TrainingLogo1 from "../../assets/images/Training-types/svg-1.svg"; 
import TrainingLogo2 from "../../assets/images/Training-types/svg-2.svg"; 
import TrainingLogo3 from "../../assets/images/Training-types/svg-3.svg"; 
import TrainingLogo4 from "../../assets/images/Training-types/svg-4.svg"; 
import TrainingLogo5 from "../../assets/images/Training-types/svg-5.svg"; 
import TrainingLogo6 from "../../assets/images/Training-types/svg-6.svg"; 
export const TrainingTypes = () => {
  return (
    <div className="training-types container-wide">
      <h2 className="visually-hidden">Training types</h2>
      <ul className="training-types-list">
        <li className="training-types-item">
          <img src={TrainingLogo1} alt="" className="training-types-image" width={150} height={140} loading="lazy" />
          <h3 className="training-types-title-item">Maxpump</h3>
        </li>
        <li className="training-types-item">
          <img src={TrainingLogo2} alt="" className="training-types-image" width={150} height={140} loading="lazy" />
          <h3 className="training-types-title-item">aron gym</h3>
        </li>
        <li className="training-types-item">
          <img src={TrainingLogo3} alt="" className="training-types-image" width={150} height={140} loading="lazy" />
          <h3 className="training-types-title-item">fit & tone</h3>
        </li>
        <li className="training-types-item">
          <img src={TrainingLogo4} alt="" className="training-types-image" width={150} height={140} loading="lazy" />
          <h3 className="training-types-title-item">forza</h3>
        </li>
        <li className="training-types-item">
          <img src={TrainingLogo5} alt="" className="training-types-image" width={150} height={140} loading="lazy" />
          <h3 className="training-types-title-item">balance fitness</h3>
        </li>
        <li className="training-types-item">
          <img src={TrainingLogo6} alt="" className="training-types-image" width={150} height={140} loading="lazy" />
          <h3 className="training-types-title-item">balance fitness</h3>
        </li>
      </ul>
    </div>
  );
};
