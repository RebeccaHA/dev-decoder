import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <div className="home-container">
      <img src="soviet.jpg" style={{ width: "100%" }} />
      <div className="centered">
        <h1>Dev Decoder</h1>
        <p>
          The world creates acronyms to sound smart and to make things seem
          complicated on the surface, and it works. Millions of people joining
          new clubs, organisations and learning new things are baffled by
          acronyms on a daily basis. A language only the "in the know" can
          decode. But no more!
        </p>
        <br />
        <p>
          The Dev Decoder is a database of acronyms made up by the tech world,
          decoded especially for you.
        </p>
        <br />
        <p>
          Know an acronym we've missed?{" "}
          <Button style={{ background: "white" }}>
            <Link style={{ color: "black" }} to="/new">
              Add it here
            </Link>
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Home;
