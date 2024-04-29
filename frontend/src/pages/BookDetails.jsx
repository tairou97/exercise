import React from "react";
import { useParams } from "react-router-dom";
import img from "../assets/img.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img3.png";
import img6 from "../assets/img4.png";
import Basket from "./details/Basket";

const BookDetails = () => {
  const data = [
    {
      id: 1,
      title: "Microsoft",
      header: "Books",
      img: img,
      price: "10$",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id odio mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu velit nec purus consequat finibus. Vivamus vel magna vel ligula pharetra tristique.",
    },
    {
      id: 2,
      title: "Adesso",
      header: "Light",
      img: img2,
      price: "39$",

      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      title: "Diva-e",
      header: "article",
      img: img3,
      price: "29.99$",
      description:
        "Phasellus consequat neque ut elit sollicitudin rhoncus. Integer condimentum nulla id lorem varius condimentum. Vivamus rutrum enim ac neque suscipit luctus. Curabitur pretium pharetra justo, a iaculis risus auctor et. Ut dapibus turpis non nisi viverra bibendum.",
    },
    {
      id: 4,
      title: "Google",
      header: "article",
      img: img4,
      price: "18.89$",
      description:
        "Fusce in est eget arcu blandit fringilla ac nec tortor. Mauris semper ligula eu elit laoreet, id tincidunt ex congue. Nam at nulla id ligula faucibus pharetra. Pellentesque et nulla nulla. Donec at dolor in lectus posuere dapibus",
    },
    {
      id: 5,
      title: "Amazon",
      header: "article",
      img: img5,
      price: "21$",

      description:
        "Fusce in est eget arcu blandit fringilla ac nec tortor. Mauris semper ligula eu elit laoreet, id tincidunt ex congue. Nam at nulla id ligula faucibus pharetra. Pellentesque et nulla nulla. Donec at dolor in lectus posuere dapibus",
    },
    {
      id: 6,
      title: "Apple",
      header: "article",
      img: img6,
      price: "19.99$",

      description:
        "Fusce in est eget arcu blandit fringilla ac nec tortor. Mauris semper ligula eu elit laoreet, id tincidunt ex congue. Nam at nulla id ligula faucibus pharetra. Pellentesque et nulla nulla. Donec at dolor in lectus posuere dapibus",
    },
    {
      id: 7,
      title: "X",
      header: "article",
      img: img6,
      price: "59.99$",

      description:
        "Fusce in est eget arcu blandit fringilla ac nec tortor. Mauris semper ligula eu elit laoreet, id tincidunt ex congue. Nam at nulla id ligula faucibus pharetra. Pellentesque et nulla nulla. Donec at dolor in lectus posuere dapibus",
    },
    {
      id: 8,
      title: " UNIQLO",
      header: "article",
      img: img6,
      price: "40.99$",

      description:
        "Fusce in est eget arcu blandit fringilla ac nec tortor. Mauris semper ligula eu elit laoreet, id tincidunt ex congue. Nam at nulla id ligula faucibus pharetra. Pellentesque et nulla nulla. Donec at dolor in lectus posuere dapibus",
    },
    {
      id: 9,
      title: " IQUNIX",
      header: "article",
      img: img6,
      price: "199.99$",

      description:
        "Fusce in est eget arcu blandit fringilla ac nec tortor. Mauris semper ligula eu elit laoreet, id tincidunt ex congue. Nam at nulla id ligula faucibus pharetra. Pellentesque et nulla nulla. Donec at dolor in lectus posuere dapibus",
    },
  ];

  const { id } = useParams();
  console.log(id);
  const filteredData = data.filter((item) => item.id == id);
  console.log(filteredData);

  return (
    <div className="bookdetail-container">
      <div className="bookdetail">
        <div className="bookdetail-img">
          <img src={filteredData[0].img} alt="" />
        </div>
        <div className="bookdetail-text">
          <h1> {filteredData[0].title}</h1>
          <h2>{filteredData[0].header}</h2>
          <p>{filteredData[0].description}</p>
          <span>{filteredData[0].price}</span>
        </div>
      </div>
      <Basket />
    </div>
  );
};

export default BookDetails;
