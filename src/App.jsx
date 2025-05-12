import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/Root";
import About from "./pages/About";
import BookList from "./components/Book/BookList";
import AddBookForm from "./components/BookForm/AddBookForm";
import Todos from "./components/Todos/TodosList";
import Axios from "./pages/Axios";
import Home from "./pages/Home";

const App = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((res) => setBooksData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const addBookHandler = (newBook) => {
    setBooksData((prev) => [
      ...prev,
      { ...newBook, id: Date.now(), stock: true, isFavorite: false },
    ]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <Home /> }, //
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "book-list",
          element: (
            <BookList booksData={booksData} setBooksData={setBooksData} />
          ),
        },
        {
          path: "add-book",
          element: <AddBookForm onAddBook={addBookHandler} />,
        },
        { path: "todos", element: <Todos /> },
        { path: "axios", element: <Axios /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
