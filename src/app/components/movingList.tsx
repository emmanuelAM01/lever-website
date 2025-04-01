import React from "react";
import Slider from "react-slick";

const SpinningList = () => {
  const logos = [
    { name: "Antalpha", src: "/images/logos/antalpha.svg", url:"https://www.antalpha.com/" },
    { name: "Centrifuge", src: "/images/logos/cetnrifuge.svg", url:"https://centrifuge.io/" },
    { name: "Gaib", src: "/images/logos/gaib.png", url:"https://www.gaib.ai/" },
    { name: "Parq", src: "/images/logos/parq.png", url:"https://parqstreet.com/" },
    { name: "Starkware", src : "/images/logos/starkware.svg", url:"https://starkware.co/" },
    { name: "Nordark", src: "/images/logos/nordark.svg", url:"https://www.nordark.com/" },
  ];

  const settings = {
    arrows: false, 
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden py-6 px-2 sm:px-6">
      <Slider {...settings}>
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex items-center justify-center px-2">
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <div className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[50px] flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpinningList;
