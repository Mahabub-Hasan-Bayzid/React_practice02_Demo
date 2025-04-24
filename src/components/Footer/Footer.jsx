import './footer.css'

const Footer = () =>{
    return (
      <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>BookStore</h3>
          <p>Your favorite online book destination. Find your next great read here!</p>
        </div>
    
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Books</a>
          <a href="#">Categories</a>
          <a href="#">Contact</a>
        </div>
    
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src="/images/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/images/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/images/twitter.svg" alt="Twitter" /></a>
          </div>
        </div>
      </div>
    
      <div className="footer-bottom">
        &copy; 2025 BookStore. All rights reserved.
      </div>
    </footer>
    

    );
    
}

export default Footer;

