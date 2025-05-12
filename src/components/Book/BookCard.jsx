import './Book.css'
import { useState } from 'react';
import axios from 'axios';


const BookCard = ({id,title,author,price,stock,genre,isFavorite,onEventHandler,onToggleStock,onToggleFavorite,onPriceChange, ...rest}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice]= useState(price);

  const priceHandler= ()=>{
    setIsEditing(true);

  }
  const handleSave = ()=>{
      const updatedBook = {
        id,
        title,
        author,
        price: parseFloat(newPrice),
        stock,
        genre,
        isFavorite
      };
    
      axios.put(`http://localhost:3001/books/${id}`, updatedBook)
        .then((res) => {
          onPriceChange(id, newPrice); 
        })
    
      setIsEditing(false);
    
    
  };
  
  return (
    
    <div className="book-card">
  <div className="card-content">
  <div className="title-fav">
    <h3>{title}<span className='star' onClick={onToggleFavorite}>
      {isFavorite ? (
        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="40px" fill="#FFFF55">
          <path d="M333.33-259 480-347l146.67 89-39-166.67 129-112-170-15L480-709l-66.67 156.33-170 15 129 112.34-39 166.33ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-353.33Z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF">
          <path d="M333.33-259 480-347l146.67 89-39-166.67 129-112-170-15L480-709l-66.67 156.33-170 15 129 112.34-39 166.33ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-353.33Z"/>
        </svg>
      )}
    </span></h3>
    </div>
    

    <p><strong>ID:</strong> {id}</p>
    <p><strong>Author:</strong> {author}</p>


    <p>
  <strong>Price:</strong>{'  '}
  {isEditing ? (
    <>
    <input
    type="number"
    name="newPrice"
    id="newPrice"
    value={newPrice}
    onChange={(e) => setNewPrice(e.target.value)}
  />
  
  <svg onClick={handleSave} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFF55"style={{ verticalAlign: 'middle', marginLeft: '4px' }}><path d="m381-240 424-424-57-56-368 367-169-170-57 57 227 226Zm0 113L42-466l169-170 170 170 366-367 172 168-538 538Z"/></svg>
  </>
  ) : (
    <>
      {price}$
      <svg onClick={priceHandler} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFF55"style={{ verticalAlign: 'middle', marginLeft: '4px' }}>
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/>
      </svg>
    </>
    
  )}
</p>

    <p className='stock'>
      <strong>Stock:</strong> {stock ? "IN Stock" : "Out of Stock"}
      <svg onClick={onToggleStock} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFF55" style={{ verticalAlign: 'middle', marginLeft: '4px' }}><path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"/></svg></p>
    <p><strong>Genre:</strong> {genre}</p>
  </div>

  <div className="card-actions">
    <button className="read-more" onClick={onEventHandler}>Read More</button>
    {stock ? (
      <button className="add-to-cart">Add to Cart</button>
    ) : (
      <button className="add-to-wishlist">Add to Wishlist</button>
    )}
  </div>
</div>

  );
};

export default BookCard;
