import React from "react";
import imgBig from "../../assets/big.png";

const Banner = () => {
  const Big = [
    { id: 1, img: imgBig, title: "Angebote" },
    { id: 2, img: imgBig, title: "Black Friday" },
    { id: 3, img: imgBig, title: "spezialangebot für kurze zeit" },
  ];
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="banner carousel slide  "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {Big.map((item) => (
          <div className="carousel-item active" key={item.id}>
            <img className="d-block w-100" src={item.img} alt={item.title} />
            <h2 className="h2">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
