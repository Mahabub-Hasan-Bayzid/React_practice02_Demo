import "./About.css";

const About = () => {
  return (
    <>
      <main className="about-container">
        <section className="about-header">
          <h1>About BookBazaar</h1>
          <p>We believe in making the joy of reading accessible to everyone.</p>
        </section>

        <section className="about-content">
          <p>
            BookBazaar was founded with a simple goal — to create a community
            where book lovers can discover, share, and purchase their favorite
            reads easily.
          </p>
          <p>
            Our collection spans fiction, non-fiction, educational books, and
            everything in between. We work closely with publishers and authors
            to bring you the best deals possible.
          </p>
          <p>
            Join us on this literary journey and find your next favorite book
            today!
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
