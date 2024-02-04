import "./NewLetters.css";

const NewLetters = () => {
  return (
    <div className="news-letters">
      <h1>Get Exculsive Offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewLetters;
