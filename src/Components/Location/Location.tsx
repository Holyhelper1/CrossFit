import Map from "../../assets/images/map.jpg";
import { ViewMoreButton } from "../View-more-button/View-more-button";
export const Location = () => {

    //заменить на настоящую карту в чёрном стиле
    return (
        <div className="location container-wide">
            <img className="location-map-image" src={Map} alt="Branches on the map" width={960} height={600} loading="lazy"/>
            <div className="location-body">
                <h2 className="location-title backdrop-title centered title-medium" data-title="Look">Find us near you</h2>
                <p className="location-description">Nec suas signiferumque id. An eum labore commodo principes. Usu diam noluisse cu, nam adipisci</p>
                <ViewMoreButton link={"#"} children={`View more`} />
            </div>
        </div>
    );
};