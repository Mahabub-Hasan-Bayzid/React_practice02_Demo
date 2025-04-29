import './App.css';
import { useState } from 'react';
import { books } from './data/bookData';
import {createBrowserRouter,RouterProvider,} from "react-router";
import Root from './pages/Root';
import About from './pages/About';
import BookList from './components/Book/BookList';
import AddBookFrom from './components/BookForm/AddBookForm';



const App = () =>{
  const [booksData,setBooksdata]= useState(books);

  const addBookHandler =(newBook)=>{
    setBooksdata((prev) => [...prev, {...newBook,id:Date.now(),stock:true,isFavorite:false},

    ]);
  }

  const router = createBrowserRouter([
    {path: "/", element: <Root/>},
    {path: "/about", element: <About/>},
    {path: "/book-list", element: <BookList booksData={booksData} setBooksdata={setBooksdata} />},
    {path: "/add-book", element: <AddBookFrom onAddBook={addBookHandler}/>},
  ]);

  return (

    <RouterProvider router={router}/>
  );
  
};

export default App;