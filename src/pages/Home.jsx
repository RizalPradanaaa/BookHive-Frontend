import React, { useEffect, useState } from "react";
import { Spin } from "../components/Spin";
import { BookTable } from "../components/Home/BookTable";
import axios from "axios";
import { BookCard } from "../components/Home/BookCard";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("cards");

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

      <div className="flex justify-center items-center gap-x-4 mb-4">
        <button
          className="font-mono = text-sky-500 font-semibold py-2.5 px-5 me-2 mb-2 text-sm  focus:outline-none bg-white rounded-lg border  hover:bg-gray-100 hover:text-blue-700   dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
        <button
          className="font-mono = text-sky-500 font-semibold py-2.5 px-5 me-2 mb-2 text-sm  focus:outline-none bg-white rounded-lg border  hover:bg-gray-100 hover:text-blue-700   dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
      </div>
      {loading ? (
        <Spin />
      ) : showType === "table" ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </>
  );
};
