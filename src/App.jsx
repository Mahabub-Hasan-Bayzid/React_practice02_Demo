import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router";
import Root from './pages/Root';
import About from './pages/About';
import BookList from './components/Book/BookList';


const router = createBrowserRouter([
  {path: "/", element: <Root/>},
  {path: "/about", element: <About/>},
  {path: "/book-list", element: <BookList/>},
]);
const App = () =>{

  return (
    <RouterProvider router={router}/>
  );
  
};

export default App;