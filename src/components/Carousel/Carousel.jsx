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
          srcSet="./images/sponsors/2-480.webp 480w, ./images/sponsors/2.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/3.webp"
          alt="img-3-NodirIbatov"
          srcSet="./images/sponsors/3-480.webp 480w, ./images/sponsors/3.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/4.webp"
          alt="img-4-ibatovClinic"
          srcSet="./images/sponsors/4-480.webp 480w, ./images/sponsors/4.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />

        <img
          className="images"
          src="./images/sponsors/20.webp"
          alt="img-20-gree"
          srcSet="./images/sponsors/20-480.webp 480w, ./images/sponsors/20.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/21.webp"
          alt="img-21-push30"
          srcSet="./images/sponsors/21-480.webp 480w, ./images/sponsors/21.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/7.webp"
          alt="img-7-galleryFlower"
          srcSet="./images/sponsors/7-480.webp 480w, ./images/sponsors/7.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
      </div>
      <div className="box-images">
        <img
          className="images"
          src="./images/sponsors/8.webp"
          alt="img-8-seynazTravel"
          srcSet="./images/sponsors/8-480.webp 480w, ./images/sponsors/8.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/9.webp"
          alt="img-9-khasanHabibullaev"
          srcSet="./images/sponsors/9-480.webp 480w, ./images/sponsors/9.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/10.webp"
          alt="img-10-marjon"
          srcSet="./images/sponsors/10-480.webp 480w, ./images/sponsors/10.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/11.webp"
          alt="img-11-alexStudio"
          srcSet="./images/sponsors/11-480.webp 480w, ./images/sponsors/11.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/12.webp"
          alt="img-12-amoreRosso"
          srcSet="./images/sponsors/12-480.webp 480w, ./images/sponsors/12.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/13.webp"
          alt="img-13-drNigmatov"
          srcSet="./images/sponsors/13-480.webp 480w, ./images/sponsors/13.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
      </div>
      <div className="box-images">
        <img
          className="images"
          src="./images/sponsors/14.webp"
          alt="img-14-indykpol"
          srcSet="./images/sponsors/14-480.webp 480w, ./images/sponsors/14.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/15.webp"
          alt="img-15-chinarMall"
          srcSet="./images/sponsors/15-480.webp 480w, ./images/sponsors/15.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/16.webp"
          alt="img-16-drBahodirov"
          srcSet="./images/sponsors/16-480.webp 480w, ./images/sponsors/16.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/17.webp"
          alt="img-17-minor"
          srcSet="./images/sponsors/17-480.webp 480w, ./images/sponsors/17.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/18.webp"
          alt="img-18-rasulovGI"
          srcSet="./images/sponsors/18-480.webp 480w, ./images/sponsors/18.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/19.webp"
          alt="img-19-dapyc"
          srcSet="./images/sponsors/19-480.webp 480w, ./images/sponsors/19.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
      </div>
      <div className="box-images">
        <img
          className="images"
          src="./images/sponsors/5.webp"
          alt="img-5-kurbanovJamshid"
          srcSet="./images/sponsors/5-480.webp 480w, ./images/sponsors/5.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/6.webp"
          alt="img-6-jasurMuhammadjanov"
          srcSet="./images/sponsors/6-480.webp 480w, ./images/sponsors/6.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
        <img
          className="images"
          src="./images/sponsors/22.webp"
          alt="img-22-mednur"
          srcSet="./images/sponsors/22-480.webp 480w, ./images/sponsors/22.webp 1080w"
          sizes="(max-width: 480px) 100vw, 50vw"
        />
      </div>
    </Slider>
  );
}
export default Carousel;
