import React from "react";
import Slider from "react-slick";

const SpinningList = () => {
  const logos = [
    // { name: "Logo 1", src: "/images/logoCORE.png" },
    { name: "Logo 2", src: "/images/logoFBTC.png" },
    { name: "Logo 3", src: "/images/logoMichaelFlight.png" },
    { name: "Logo 4", src: "/images/logoTuscanyResort.png" },
    { name: "Logo 5", src: "/images/logoUruguayResort.png" },
    { name: "Logo 6", src: "/images/logoWbtc.png" },
    // { name: "Logo 7", src: "/images/9.png" },
    { name: "Logo 8", src: "/images/NewSousta_MARCA.png" }, // PUT THE CROPPED IMAGE HERE
  ];

  const settings = {
    dots: false, // Disable navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 10000, // Speed of the scroll (milliseconds) - slower now
    slidesToShow: 5, // How many logos to show at once
    slidesToScroll: 1, // Scroll one at a time
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 0, // Make it instant
    cssEase: "linear", // Smooth scroll
    draggable: false, // Disable dragging (for smoother infinite scroll)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Less logos on smaller screens
          centerMode: true, // Center the logos
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // One logo on very small screens
          centerMode: true, // Center the single logo
        },
      },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <Slider {...settings}>
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex justify-center align-middle">
            <img
              src={logo.src}
              alt={logo.name}
              className="object-contain w-[150px] sm:w-[120px] xs:w-[100px]" // Adjust size for mobile
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpinningList;
