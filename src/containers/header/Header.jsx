import "./header.css";
import Spaniel from "../../assets/Spaniel01_gradient.png";

const Header = () => {
  return (
    <div className="header ">
      <div className="header-content section__padding">
        <h3>BRAND, DEV, ECOM, MARKETING</h3>
        <h1 className="header__text__dark header__font__family__size">
          We unleash
        </h1>
        <h1 className="header__text__light header__font__family__size">
          business potential
        </h1>
        <p className="header__text__light ">
          We create brand experiences which are memorable and distinct. Our
          experienced team create and develop brands with personality and
          resonance.
        </p>
        <div className="header-content__input">
          <button className="talk_button wobble-hor-bottom" type="button">
            Let’s talk
          </button>
        </div>
      </div>
      <div className="header-image ">
        <img src={Spaniel} alt="spaniel" />
      </div>
    </div>
  );
};

export default Header;
