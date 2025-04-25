import { books } from '../../data/bookData';
import BookCard from './BookCard';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BookList = () => {
  const [booksData, setBooksData] = useState(books);
  const [searchValue, setSearchValue] = useState('');

  const eventHandler = (id)=>{
    console.log('Read More Button was clicked',id);
    
  }
  const toggleStock = (id)=>{
    const updatedArray = booksData.map((book)=> book.id === id ?{...book, stock:!book.stock} : book)
    setBooksData(updatedArray)
  }
  const toggleFavorite = (id)=>{
    setBooksData((prevBooks) =>
      prevBooks.map((book)=> book.id === id? {...book, isFavorite: !book.isFavorite} : book)
    )
    
  }
  const searchHandler = (event)=>{
    setSearchValue(event.target.value)
  }

  const handleUpdatePrice = (id,newPrice)=>{
    setBooksData((prevBooks)=> prevBooks.map(book=> book.id === id ? {...book, price: parseFloat(newPrice)} : book));
  }


  return (
    <>
    <Header/>
  <div>
    <h2>Top Books of All Time 📚</h2>
    <div className="search-wrapper">
    <input
      onChange={searchHandler}
      type="text"
      name="search"
      id="search"
      value={searchValue}
      placeholder="Type a book title..."
    />
  </div>
    <div className="book-grid">
      {booksData
        .filter((book) =>
          book.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((book) => (
          <BookCard
            key={book.id}
            {...book}
            onEventHandler={() => eventHandler(book.id)}
            ontoggleStock={toggleStock}
            ontoggleFavorite={() => toggleFavorite(book.id)}
            onPriceChange={handleUpdatePrice}
          />
        ))}
    </div>
  </div>
  <Footer />
</>

  );
};

export default BookList;
