import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <img src="soviet.jpg" style={{ width: "100%" }} />
      <div className="centered">
        <h1>Dev Decoder</h1>
        <p>
          The world creates acronyms to sound smart and to make things seem
          complicated on the surface, and it works. Millions people joining new
          clubs, organisations and learning new things are baffled by acronyms
          on a daily basis. A language only the "in the know" can decode. But no
          more!
        </p>
        <p>
          The Dev Decoder is a database of acronyms made up by the tech world,
          decoded especially for you.
        </p>
        <p>
          Know an acronym we've missed? <Link to="/new">Add it here</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
