import React from "react";
import imgBig2 from "../../assets/big1.png";
const Bottomleft = () => {
  const Big = [{ id: 1, img: imgBig2, title: "NEUHEITEN" }];
  return (
    <div className="banner-bottom  ">
      <div className="">
        {Big.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <h2 className="h2">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottomleft;
