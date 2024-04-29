import React from "react";
import img from "../assets/img.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img3.png";
import img6 from "../assets/img4.png";
import Banner from "./banner/Banner";
import Bottomleft from "./bottom-banner/Bottomleft";
import Bottom_right from "./bottom-banner/Bottom_right";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    title: "Microsoft",
    header: "Books",
    img: img,
    price: "10$",
    description: "Fusce in est eget arcu blandit fringilla ac nec tortor.",
  },
  {
    id: 2,
    title: "Adesso",
    header: "Light",
    img: img2,
    price: "39$",
    description: "Fusce in est eget arcu blandit fringilla ac nec tortor.",
  },
  {
    id: 3,
    title: "Diva-e",
    header: "article",
    img: img3,
    price: "29.99$",
    description: "Fusce in est eget arcu blandit fringilla ac nec tortor.",
  },
  {
    id: 4,
    title: "Google",
    header: "article",
    img: img4,
    price: "18.89$",
    description: "Fusce in est eget arcu blandit fringilla ac nec tortor.",
  },
  {
    id: 5,
    title: "Amazon",
    header: "article",
    img: img5,
    price: "21$",
    description: "Fusce in est eget arcu blandit fringilla ac nec tortor.",
  },
  {
    id: 6,
    title: "Apple",
    header: "article",
    img: img6,
    price: "19.99$",
    description: "Fusce in est eget arcu blandit fringilla ac nec tortor.",
  },
  {
    id: 7,
    title: "X",
    header: "article",
    img: img6,
    price: "59.99$",
    description: "Fusce in est eget arcu blandit fringilla ac nec tortor.",
  },
  {
    id: 8,
    title: " UNIQLO",
    header: "article",
    img: img6,
    price: "40.99$",
    description: "Fusce in est eget arcu blandit fringilla ac nec tortor.",
  },
  {
    id: 9,
    title: " IQUNIX",
    header: "article",
    img: img6,
    price: "199.99$",
    description: "Fusce in est eget arcu blandit fringilla ac nec tortor.",
  },
];
const counter = 0;
function main() {
  for (let i = 0; i < counter; i++) {
    return;
  }
}
main();

const Home = () => {
  return (
    <>
      <Banner />
      <h1>AKTUELLES</h1>
      <div className="container ">
        {data.map((d) => (
          <Link key={d.id} to={`/bookdetail/${d.id}`}>
            <div className="card-product" key={d.id}>
              <img src={d.img} alt={d.title} />
              <h2>{d.title}</h2>
              <div className="card-content">
                <h4>{d.header}</h4>
                <p>{d.description}</p>
                <p>
                  Price <span className="text-red-600">{d.price}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bottom ">
        <Bottom_right />
        <Bottomleft />
      </div>
    </>
  );
};

export default Home;
