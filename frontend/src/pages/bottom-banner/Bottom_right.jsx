import React from "react";

import imgBig3 from "../../assets/big2.png";

const Bottom_side = () => {
  const Big = [{ id: 1, img: imgBig3, title: "DAUERHAFT REDUZIERT" }];
  return (
    <div className="banner-bottom  ">
      {Big.map((item) => (
        <div className="" key={item.id}>
          <img className="" src={item.img} alt={item.title} />
          <h2 className="h2">{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Bottom_side;
