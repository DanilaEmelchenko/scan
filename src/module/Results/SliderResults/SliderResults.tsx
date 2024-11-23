import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s from "./SliderResults.module.scss";
import { arr } from "./slider.data";

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      style={{
        height: "39px",
        width: "39px",
        marginRight: "-20px",
        marginTop: "-8px",
      }}
      className={className}
      onClick={onClick}
    >
      <img src="/icons/main/slider/arrow-right.svg" alt="arrow" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      style={{
        height: "39px",
        width: "39px",
        marginLeft: "-20px",
        marginTop: "-8px",
      }}
      className={className}
      onClick={onClick}
    >
      <img src="/icons/main/slider/arrow-left.svg" alt="arrow" />
    </div>
  );
}

const SliderResults = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
    centerPadding: "-10px",
  };
  return (
    <div className={s["slider-container"]}>
      <div className={s.left}>
        <p className={s.text}>Период</p>
        <p className={s.text}>Всего</p>
        <p className={s.text}>Риски</p>
      </div>
      <Slider className={s.slider} {...settings}>
        {arr.map((slide) => (
          <div key={slide.id} className={s.slide}>
            <p className={s.date}>{slide.date}</p>
            <p className={s.inTotal}>{slide.inTotal}</p>
            <p className={s.inRisk}>{slide.inRisk}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderResults;
