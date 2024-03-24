import React from "react";
import { Card } from "flowbite-react";

export const BookCard = ({ books }) => {
  return (
    <div className="overflow-x-auto mb-4 flex flex-wrap">
      {books.map((book, index) => (
        <Card
          className="max-w-sm mb-4 mr-4"
          imgSrc={book.cover}
          horizontal
          key={index}
        >
          <h5 className="text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
            {book.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
            {book.author}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
            Publish Year: {book.description}
          </p>
        </Card>
      ))}
    </div>
  );
};
