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
          src="./images/sponsors/2.webp"
          alt="img-2-vertus"
          loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/3.webp"
          alt="img-3-NodirIbatov"
          loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/4.webp"
          alt="img-4-ibatovClinic"
          loading="lazy"

  
        />

        <img
          className="images"
          src="./images/sponsors/20.webp"
          alt="img-20-gree"
        loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/21.webp"
          alt="img-21-push30"
     loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/7.webp"
          alt="img-7-galleryFlower"
  loading="lazy"
        />
      </div>
      <div className="box-images">
        <img
          className="images"
          src="./images/sponsors/8.webp"
          alt="img-8-seynazTravel"
         loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/9.webp"
          alt="img-9-khasanHabibullaev"
       loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/10.webp"
          alt="img-10-marjon"
       loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/11.webp"
          alt="img-11-alexStudio"
   loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/12.webp"
          alt="img-12-amoreRosso"
        loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/13.webp"
          alt="img-13-drNigmatov"
         loading="lazy"
        />
      </div>
      <div className="box-images">
        <img
          className="images"
          src="./images/sponsors/14.webp"
          alt="img-14-indykpol"
    loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/15.webp"
          alt="img-15-chinarMall"
      loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/16.webp"
          alt="img-16-drBahodirov"
       loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/17.webp"
          alt="img-17-minor"
         loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/18.webp"
          alt="img-18-rasulovGI"
         loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/19.webp"
          alt="img-19-dapyc"
        loading="lazy"
        />
      </div>
      <div className="box-images">
        <img
          className="images"
          src="./images/sponsors/5.webp"
          alt="img-5-kurbanovJamshid"
        loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/6.webp"
          alt="img-6-jasurMuhammadjanov"
        loading="lazy"
        />
        <img
          className="images"
          src="./images/sponsors/22.webp"
          alt="img-22-mednur"
      loading="lazy"
        />
      </div>
    </Slider>
  );
}
export default Carousel;
