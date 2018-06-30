import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div id="jumbotron">
        <h1>Mario Memory Game!</h1>
        <h3>Click on a picture, but remember which one you picked</h3>
        <h3>Game's over when you click a picture more than once.</h3>
        <h3 id="win"></h3>
    </div>
);
export default Jumbotron;