import './header.css';
import { NavLink } from 'react-router';
import { Link } from 'react-router';

const Header =()=>{
    return (
        <header className="site-header">
  <div className="header-container">
    <div className="logo">Book<span>Store</span></div>

    <nav className="site-nav">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to='/book-list'>Books</NavLink>
      <NavLink to='/add-book'>Add Book</NavLink>
      <NavLink to='#'>Person</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink>Contact</NavLink>
    </nav>

    <div className="cart-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#fff">
        <path d="M280-120q-17 0-28.5-11.5T240-160q0-17 11.5-28.5T280-200q17 0 28.5 11.5T320-160q0 17-11.5 28.5T280-120Zm400 0q-17 0-28.5-11.5T640-160q0-17 11.5-28.5T680-200q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120ZM260-680h540l-82 320H328L260-680Zm-60-80h644q20 0 32 16.5t6 36.5L812-320q-4 15-16 23.5T768-288H312l-20 80h528v80H276q-20 0-32-16.5t-6-36.5l26-104-72-288q-2-8 0-15.5t8-13T200-760Zm104 480h432l64-256H336l-32 256Z"/>
      </svg>
    </div>
  </div>
</header>

    );
}


export default Header;