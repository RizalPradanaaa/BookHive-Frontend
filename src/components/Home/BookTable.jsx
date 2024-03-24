import React from "react";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

export const BookTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Publish</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {books.map((book, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.title}
              </Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.publishYear}</Table.Cell>
              <Table.Cell>
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/detail/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/books/update/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
