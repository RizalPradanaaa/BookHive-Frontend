import React, { useEffect, useState } from "react";
import { Spin } from "../components/Spin";
import { BookTable } from "../components/Home/BookTable";
import axios from "axios";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/books");
        setBooks(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <h1 className="font-mono text-4xl text-sky-500 font-semibold my-5 shadow shadow-md border border-solid border-spacing-3 p-4 rounded-xl">
        BookHive
      </h1>
      {loading ? <Spin /> : <BookTable books={books} />}
    </>
  );
};
