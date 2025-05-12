import "./AddBookForm.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AddBookForm = ({ onAddBook }) => {
  // const [title, setTitle]= useState("");
  // const [author, setAuthor]= useState("");
  // const [price, setPrice]= useState("");
  // const [genre, setGenre]= useState("");

  // const  handleSubmit =(e)=>{
  //     e.preventDefault();
  //     const newBook ={
  //         title,author,genre,price: parseFloat(price),
  //     }

  //     onAddBook(newBook);
  //     setAuthor("");
  //     setGenre("");
  //     setPrice("");
  //     setTitle("")

  // }

  const [fromData, setFromdata] = useState({
    title: "",
    genre: "",
    price: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...fromData,
      price: parseFloat(fromData.price),
    };
    axios
      .post("http://localhost:3001/books", newBook)
      .then((res) => console.log(res));

    setFromdata({ title: "", author: "", price: "", genre: "" });
  };

  return (
    <>
      <section className="add-book-wrapper">
        <h2>Add a New Book</h2>
        <form className="add-book-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={fromData.title}
            onChange={handleChange}
            placeholder="Book Title"
            required
          />
          <input
            type="text"
            name="author"
            value={fromData.author}
            onChange={handleChange}
            placeholder="Author"
            required
          />
          <input
            type="genre"
            name="genre"
            value={fromData.genre}
            onChange={handleChange}
            placeholder="Genre"
            required
          />
          <input
            type="number"
            name="price"
            value={fromData.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />

          <button type="submit" className="add-book-button">
            Add Book
          </button>
        </form>
      </section>
    </>
  );
};

export default AddBookForm;
