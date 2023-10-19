import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import React from "react";
import Slider from "react-slick";
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 2,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div className="box-images">
        <img
          className="images"
          src="./images/sponsors/2.png"
          alt="img-2-vertus"
        />
        <img
          className="images"
          src="./images/sponsors/3.png"
          alt="img-3-NodirIbatov"
        />
        <img
          className="images"
          src="./images/sponsors/4.png"
          alt="img-4-ibatovClinic"
        />
        <img
          className="images"
          src="./images/sponsors/20.png"
          alt="img-20-gree"
        />
        <img
          className="images"
          src="./images/sponsors/21.png"
          alt="img-21-push30"
        />
        <img
          className="images"
          src="./images/sponsors/7.png"
          alt="img-7-galleryFlower"
        />
      </div>
      <div className="box-images">
        <img
          className="images"
          src="./images/sponsors/8.png"
          alt="img-8-seynazTravel"
        />
        <img
          className="images"
          src="./images/sponsors/9.png"
          alt="img-9-khasanHabibullaev"
        />
        <img
          className="images"
          src="./images/sponsors/10.png"
          alt="img-10-marjon"
        />
        <img
          className="images"
          src="./images/sponsors/11.png"
          alt="img-11-alexStudio"
        />
        <img
          className="images"
          src="./images/sponsors/12.png"
          alt="img-12-amoreRosso"
        />
        <img
          className="images"
          src="./images/sponsors/13.png"
          alt="img-13-drNigmatov"
        />
      </div>
      <div className="box-images">
        <img
          className="images"
          src="./images/sponsors/14.png"
          alt="img-14-indykpol"
        />
        <img
          className="images"
          src="./images/sponsors/15.png"
          alt="img-15-chinarMall"
        />
        <img
          className="images"
          src="./images/sponsors/16.png"
          alt="img-16-drBahodirov"
        />
        <img
          className="images"
          src="./images/sponsors/17.png"
          alt="img-17-minor"
        />
        <img
          className="images"
          src="./images/sponsors/18.png"
          alt="img-18-rasulovGI"
        />
        <img
          className="images"
          src="./images/sponsors/19.png"
          alt="img-19-dapyc"
        />
      </div>
      <div className="box-images">
        <img
          className="images"
          src="./images/sponsors/5.png"
          alt="img-5-kurbanovJamshid"
        />
              <img
          className="images"
          src="./images/sponsors/6.png"
          alt="img-6-jasurMuhammadjanov"
        />
              <img
          className="images"
          src="./images/sponsors/22.png"
          alt="img-22-mednur"
        />
      </div>
    </Slider>
  );
}
export default Carousel;
