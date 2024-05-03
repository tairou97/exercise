import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Basket from "./details/Basket";

const BookDetails = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    const fetchBooks = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/books`, id);
        setBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  const { id } = useParams();
  console.log(id);
  const filteredData = books.filter((item) => item.id == id);
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
