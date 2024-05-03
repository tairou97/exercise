import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Banner from "./banner/Banner";
import Bottomleft from "./bottom-banner/Bottomleft";
import Bottom_right from "./bottom-banner/Bottom_right";
import { Link } from "react-router-dom";
const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");

        setBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <Banner />
      <h1>AKTUELLES</h1>
      <div className="container ">
        {books &&
          books.map((d) => (
            <Link key={d.id} to={`/bookdetail/${d.id}`}>
              <div className="card-product" key={d.id}>
                <img src={d.img} alt={d.title} />
                <h2>{d.title}</h2>
                <div className="card-content">
                  <h4>{d.header}</h4>
                  <p>{d.description}</p>
                  <p>{d.genre}</p>
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
