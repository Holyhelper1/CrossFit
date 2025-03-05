export const Banner = () => {
  //сделать как слайдер
  return (
    <div className="banner">
      <h2 className="visually-hidden">Upcoming events</h2>
      <div className="banner-body">
        <div className="banner-info">
          <div className="banner-text">
            New event<br></br>
            coming up / <time dateTime="06-07">june 7</time> -{" "}
            <time dateTime="06-13">13</time>
          </div>
        </div>
        <h3 className="banner-title">CrossFit</h3>
      </div>
      <div className="banner-pagination">
        <ul className="banner-pagination-list">
          <li className="banner-pagination-item">
            <button className="banner-pagination-button" type="button"></button>
          </li>
          <li className="banner-pagination-item">
            <button className="banner-pagination-button" type="button"></button>
          </li>
          <li className="banner-pagination-item is-current">
            <button className="banner-pagination-button" type="button"></button>
          </li>
        </ul>
      </div>
    </div>
  );
};
