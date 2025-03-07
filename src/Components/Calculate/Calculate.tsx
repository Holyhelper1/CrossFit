import { ViewMoreButton } from "../View-more-button/View-more-button";

//добавить рабочий калькулятор!
export const Calculate = () => {
  return (
    <div className="calculate">
      <div className="calculate-inner container">
        <div className="calculate-body">
          <h2
            className="calculate-title backdrop-title title-medium"
            data-title="BMI"
          >
            Input your BMI
          </h2>
          <div className="calculate-description">
            <p>
              Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes,
              nam no nemore epicurei
            </p>
          </div>
          <form className="calculate-form">
            <div className="calculate-form-body">
              <label className="visually-hidden" htmlFor="height">
                Height
              </label>
              <input
                className="calculate-input input"
                id="height"
                type="number"
                placeholder="Height / cm"
              />
              <label className="visually-hidden" htmlFor="weight">
                Weight
              </label>
              <input
                className="calculate-input input"
                id="weight"
                type="number"
                placeholder="Weight / kg"
              />
              <label className="visually-hidden" htmlFor="age">
                Age
              </label>
              <input
                className="calculate-input input"
                id="age"
                type="number"
                placeholder="Age"
              />

              <label className="visually-hidden" htmlFor="gender">
                Gender
              </label>
              <select
                className="calculate-input input"
                id="gender"
                defaultValue="DEFAULT"
              >
                <option value="DEFAULT" disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <label className="visually-hidden" htmlFor="activity-factor">
                Activity factor
              </label>
              <select
                className="calculate-input input wide"
                id="activity-factor"
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT" disabled>
                  Select an activity factor:
                </option>
                <option value="sedentary">Sedentary</option>
                <option value="lightly active">Lightly active</option>
                <option value="moderate activity">Moderate activity </option>
                <option value="active">Active</option>
                <option value="high activity">High activity</option>
              </select>
            </div>
            <ViewMoreButton children={"Calculate"} type={"submit"} />
          </form>
        </div>
        {/* сделать значения таблицы через map  */}
        <div className="calculate-table-wrapper">
          <table className="calculate-table">
            <caption className="visually-hidden">BMI table</caption>
            <thead>
              <tr>
                <th>BMI</th>
                <th>Weight status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Below 18.5</td>
                <td>Underweight</td>
              </tr>
              <tr>
                <td>18.5 - 24.9</td>
                <td>Healthy</td>
              </tr>
              <tr>
                <td>25.0 - 29.9</td>
                <td>Overweight</td>
              </tr>
              <tr>
                <td>30.0 - and Above</td>
                <td>Obese</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>
                  <b>BMR</b> Metabolic Rate / <b>BMI</b> Body Mass Index
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
