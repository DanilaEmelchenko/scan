import s from "./SliderMain.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderData } from "./slider.data";

const SampleNextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      style={{ height: "39px", width: "39px", marginRight: "-12px" }}
      className={className}
      onClick={onClick}
    >
      <img src="icons/main/slider/arrow-right.svg" alt="arrow" />
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      style={{ height: "39px", width: "39px", marginLeft: "-12px" }}
      className={className}
      onClick={onClick}
    >
      <img src="icons/main/slider/arrow-left.svg" alt="arrow" />
    </div>
  );
};

const SliderMain = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className={s.slider}>
      <h2 className={s.title}>Почему именно мы</h2>
      <Slider className={s["slider-container"]} {...settings}>
        {sliderData.map((slide) => (
          <div key={slide.id} className={s.slide}>
            <img className={s.icon} src={slide.icon} alt="icon" />
            <p className={s.text}>{slide.text}</p>
          </div>
        ))}
      </Slider>
      <img className={s.image} src="images/main/main-image.svg" alt="image" />
    </section>
  );
};

export default SliderMain;
