import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <div className="home-container">
      <div className="centered">
        <h1 className="home-box-title">Dev Decoder</h1>
        <p className="home-box-text">
          The world creates acronyms to sound smart and to make things seem
          complicated on the surface, and it works. Millions of people joining
          new clubs, organisations and learning new things are baffled by
          acronyms on a daily basis. A language only the "in the know" can
          decode. But no more!
        </p>
        <br />
        <p className="home-box-text">
          The Dev Decoder is a database of acronyms made up by the tech world,
          decoded especially for you.
        </p>
        <br />
        <p className="home-box-text">
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
